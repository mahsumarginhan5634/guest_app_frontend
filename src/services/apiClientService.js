import i18next from "i18next";
import { clearLocalStorage, getAccessToken, getRefreshToken, getUserFromLocalStorage, setAccessToken, setRefreshToken, setUserToLocalStorage } from "../store/localStorage";
import { ToastMessage } from "../utils/Enums";
import { showToastMessage } from "../utils/ErrorMessage";


const BASE_URL = "/api";

let isRefreshing = false;
let queue = [];

const refreshAuthToken = async () => {
    const user = getUserFromLocalStorage();
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();

    if (!user || !refreshToken || !accessToken) {
        throw new Error("Missing credentials");
    }

    try {
        const tempResponse = await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: user.id,
                refreshToken: refreshToken,
            }),
        });


        if (!tempResponse.ok) {
            return;
        }

        const response = await tempResponse.json();

        if (!response.meta.status) {
            showToastMessage(
                response.meta.errorMessage,
                ToastMessage.WARNING,
                3000
            );
            clearLocalStorage();
            setTimeout(() => {
                window.location.href = "/auth/login";
            }, 3000);
            return null;
        }

        else if (response.data) {
            const data = response.data;
            setAccessToken(data.accessToken.replace("Bearer ", ""));
            setRefreshToken(data.refreshToken);
            setUserToLocalStorage(data.user);
            return data.accessToken.replace("Bearer ", "");
        }

    } catch (error) {
        showToastMessage(
            i18next.t("unexpectedError"),
            ToastMessage.ERROR,
            3000);
    }

};

const processQueue = (error, token) => {
    queue.forEach(p => {
        if (error) {
            p.reject(error);
        } else {
            p.resolve(token);
        }
    });
    queue = [];
};

export const apiClientService = async (url, options = {}, auth = true) => {
    const fullUrl = `${BASE_URL}${url}`;
    let accessToken = getAccessToken();

    if (auth) {
        if (!accessToken) {
            return;
        }
        options.headers = {
            ...(options.headers || {}),
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        };
    }
    else {
        options.headers =
        {
            ...(options.headers || {}),
            "Content-Type": "application/json",
        };
    }

    let response = await fetch(fullUrl, options);

    if (response.status === 401 && auth) {
        const retryOriginal = new Promise((resolve, reject) => {
            queue.push
                ({
                    resolve: (token) => {
                        options.headers.Authorization = `Bearer ${token}`;
                        resolve(fetch(fullUrl, options));
                    },
                    reject: (err) => reject(err),
                });
        });

        if (!isRefreshing) {
            isRefreshing = true;
            try {
                const accessToken = await refreshAuthToken();
                if (accessToken != null) {
                    processQueue(null, accessToken);
                }
            } catch (err) {
                processQueue(err, null);
                showToastMessage(i18next.t("unexpectedError"), ToastMessage.ERROR, 3000);
                clearLocalStorage();
                setTimeout(() => {
                    window.location.href = "/auth/login";
                }, 3000);
            } finally {
                isRefreshing = false;
            }
        }

        return retryOriginal;
    }
    return response;
};


/*
    Auth gerektiren isteklerde : 

    Kullanılan bu yapı sayesinde öncelikle api'a istek atılır accessToken'in expire olup olmamasına bağlı olarak , istek sonucu 401 olan istekler proccessQueue kuyruğuna atılırlar ve sonrasında refreshAuthToken isteği atılarak yeni bir accessToken alınır.

    Yeni bir accessToken alındıktan sonra kuyruktaki eski API istekleri yeniden atılırlar.


    24.04.2025 tarihi itibarı ile accessToken ve refreshToken ile ilgili lojik işlemler gerçekleştirdi.Lojik akış aşağıdaki gibidir.

    Herhangi bir API 'a istek atıldığında :
        A ) istek sonucu 200 ise sıkıntı yok
        B ) istek sonucu 401 olursa bu isteği proccessQueue kuyruğuna at.
        ve refreshAuthToken ile yeni bir accessToken alma isteği at bu istek sırasında refreshToken'ın geçerli mi olup olmadığını kontrol et :
            B1 : refreshToken hala geçerli ise yeni bir accessToken üretip bunu dön
            B2 : refreshToken süresi geçerliliğini yitirmişse eğer
            kullanıcının oturumunu sonlandır ve localStorage'dan accessToken ile refreshToken gibi tüm bilgileri silerek kullanıcıyı login ekranına yolla.
*/