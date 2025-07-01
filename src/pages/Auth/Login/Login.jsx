import {
  FormControl,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../../services/AuthService";
import { useTranslation } from "react-i18next";
import { showToastMessage } from "../../../utils/ErrorMessage";
import { ToastMessage } from "../../../utils/Enums";
import { useFormik } from "formik";
import { UserLoginRequest } from "../../../utils/Requests";
import CustomButton from "../../../components/CustomButton/CustomButton.jsx"
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/redux/slices/userSlice";
import { setAccessToken, setRefreshToken, setUserToLocalStorage } from "../../../store/localStorage";
import pageRoutes from "../../../route/pageRoutes.jsx";


function Login() {

  const [isRequestSent, setIsRequestSent] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const durationTimeMilis = 1500;
  const dispatch = useDispatch();


  const from = location.state?.from?.pathname || "/";

  const formik = useFormik({
    initialValues: UserLoginRequest,
    onSubmit: async (values) => {
      await sendLoginRequest(values);
    }
  });

  const sendLoginRequest = async (values) => {
    if (!formik.values.username || !formik.values.password) {
      showToastMessage(
        t("userLoginRequest.usernameAndPasswordRequired"),
        ToastMessage.WARNING,
        durationTimeMilis);
      return;
    }
    setIsRequestSent(true);
    try {
      const tempResponse = await login(values);
      if (!tempResponse.status) {
        showToastMessage(
          t("userLoginRequest.unexpectedError"),
          ToastMessage.ERROR,
          durationTimeMilis);
      }

      const response = await tempResponse.json();
      if (response.meta.code === "200") {
        const data = response.data;
        if (!data.refreshToken) {
          showToastMessage(
            t('userRegisterRequest.refreshTokenError'),
            ToastMessage.WARNING,
            durationTimeMilis
          )
        }
        else {
          data.accessToken = data.accessToken.replace("Bearer", "");
          setAccessToken(data.accessToken.trim());
          setRefreshToken(data.refreshToken.trim());
          dispatch(loginUser(data.user));

          showToastMessage(
            t("userLoginRequest.userLoginSuccess"),
            ToastMessage.SUCCESS,
            durationTimeMilis);

          setTimeout(() => {
            navigate(from, { replace: true });
          }, durationTimeMilis)
        }
      }
      else if (response.meta.code != "200") {
        showToastMessage(response.meta.errorMessage,
          ToastMessage.WARNING,
          durationTimeMilis);
      }


    } catch (error) {
      showToastMessage(t("userLoginRequest.unexpectedError"),
        ToastMessage.ERROR,
        durationTimeMilis);
    }
    finally {
      setIsRequestSent(false);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await sendLoginRequest(formik.values);
    }
  };

  useEffect(() => {
    if (location.state?.username) {
      formik.setFieldValue("username", location.state.username);
    }
    if (location.state?.password) {
      formik.setFieldValue("password", location.state.password);
    }
  }, [location.state]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "200px",
      }}
    >
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <FormControl
          style={{
            width: "100%",
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "30vw",
            }}
          >
            <TextField
              value={formik.values.username}
              required
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                formik.setFieldValue("username", e.target.value);
              }}
              label={t("userLoginRequest.username")}
              variant="standard"
              type="text"
              name="username"
              placeholder={t("userLoginRequest.username")}
            />

            <TextField
              value={formik.values.password}
              required
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                formik.setFieldValue("password", e.target.value);
              }}
              label={t("userLoginRequest.password")}
              variant="standard"
              type="password"
              name="password"
              placeholder={t("userLoginRequest.password")}
            />

            <CustomButton
              type="submit"
              text={t("userLoginRequest.login")}
              disableDecision={isRequestSent}
              isRequestSent={isRequestSent}
            />

            <FormHelperText
              style={{
                textAlign: "center",
              }}
            >
              <Link
                to={pageRoutes.AUTH_REGISTER.path}
                style={{
                  textAlign: "center",
                  padding: "20px 0px",
                  color: "lightslategray",
                  textDecoration: "none",
                  transition: "color 0.1s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "black")}
                onMouseLeave={(e) => (e.target.style.color = "lightslategray")}
              >
                {t("userLoginRequest.gotoRegisterPage")}
              </Link>
            </FormHelperText>
          </div>
        </FormControl>
      </form>
    </div>
  );
}

export default Login;
