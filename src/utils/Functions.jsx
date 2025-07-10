import { t } from "i18next";
import { useTranslation } from "react-i18next";

export const getTimeAgo = (dateStr) => {
    const { t } = useTranslation();
    const now = new Date();
    const past = new Date(dateStr);
    const diff = Math.floor((now - past) / 1000)

    if (diff < 60) return `${diff} ${t('second')}  ${t("ago")}`;
    if (diff < 3600) return `${Math.floor(diff / 60)} ${t('minute')}  ${t("ago")}`
    if (diff < 86400) return `${Math.floor(diff / 3600)} ${t('hours')}  ${t("ago")}`
    if (diff < 604800) return `${Math.floor(diff / 86400)} ${t('day')}  ${t("ago")}`
    if (diff < 2592000) return `${Math.floor(diff / 604800)} ${t('week')}  ${t("ago")}`

    const day = past.getDate().toString().padStart(2, '0');
    const month = (past.getMonth() + 1).toString().padStart(2, '0');
    const year = past.getFullYear();

    return `${day}-${month}-${year}`
};

export const getLikeCount = (likeCount) => {
    const billion = Math.pow(10, 9);
    const million = Math.pow(10, 6);
    const thousand = Math.pow(10, 3);

    if (likeCount >= billion) {
        const main = Math.floor(likeCount / billion);
        const decimal = Math.floor((likeCount % billion) / (billion / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('billion')} ${t('liking')}`;
    }

    if (likeCount >= million) {
        const main = Math.floor(likeCount / million);
        const decimal = Math.floor((likeCount % million) / (million / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('million')} ${t('liking')}`;
    }

    if (likeCount >= thousand) {
        const main = Math.floor(likeCount / thousand);
        const decimal = Math.floor((likeCount % thousand) / (thousand / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('thousand')} ${t('liking')}`;
    }

    return `${likeCount} ${t('liking')}`;
}

export const getCommentCount = (commetCount) => {
    const billion = Math.pow(10, 9);
    const million = Math.pow(10, 6);
    const thousand = Math.pow(10, 3);

    if (commetCount >= billion) {
        const main = Math.floor(commetCount / billion);
        const decimal = Math.floor((commetCount % billion) / (billion / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('billion')} ${t('comment')}`;
    }

    if (commetCount >= million) {
        const main = Math.floor(commetCount / million);
        const decimal = Math.floor((commetCount % million) / (million / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('million')} ${t('comment')}`;
    }

    if (commetCount >= thousand) {
        const main = Math.floor(commetCount / thousand);
        const decimal = Math.floor((commetCount % thousand) / (thousand / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('thousand')} ${t('comment')}`;
    }

    return `${commetCount} ${t('comment')}`;
}

export const getFollowCount = (followCount) => {
    const billion = Math.pow(10, 9);
    const million = Math.pow(10, 6);
    const thousand = Math.pow(10, 3);

    if (followCount >= billion) {
        const main = Math.floor(followCount / billion);
        const decimal = Math.floor((followCount % billion) / (billion / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('billion')}`;
    }

    if (followCount >= million) {
        const main = Math.floor(followCount / million);
        const decimal = Math.floor((followCount % million) / (million / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('million')}`;
    }

    if (followCount >= thousand) {
        const main = Math.floor(followCount / thousand);
        const decimal = Math.floor((followCount % thousand) / (thousand / 10));
        return `${main}${decimal > 0 ? '.' + decimal : ''} ${t('thousand')}`;
    }

    return `${followCount}`;
}

export const getNameAndSurnameWithFormatted = (name , surname) => {
    return (name.charAt(0).toUpperCase() + name.substring(1))
    + " "
    + (surname.charAt(0).toUpperCase() + surname.substring(1))
}

export const getTextWithCapitalize = (text) => {
    return (text.charAt(0).toUpperCase() + text.substring(1))
}
