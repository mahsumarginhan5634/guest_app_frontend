import { isValidPhoneNumber } from "libphonenumber-js";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useUserReqisterSchema = () => {
  const { t } = useTranslation();

  return Yup.object({
    name: Yup.string().required(t("userRegisterRequest.nameRequired")),

    surname: Yup.string().required(t("userRegisterRequest.surnameRequired")),

    username: Yup.string()
      .min(4, t("userRegisterRequest.usernameMustBeLeast4Char"))
      .required(t("userRegisterRequest.usernameRequired")),

    email: Yup.string()
      .email(t("userRegisterRequest.invalidTypeOfEmail"))
      .required(t("userRegisterRequest.emailRequired")),

    password: Yup.string()
      .min(6, t("userRegisterRequest.passwordMustBeGreater6Char"))
      .required(t("userRegisterRequest.passwordRequired")),

    repeat_password: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        t("userRegisterRequest.repeatPasswordMustMatchPassword")
      )
      .required(t("userRegisterRequest.repeatPasswordRequired")),

    birthday: Yup.date().required(t("userRegisterRequest.birthdayRequired")),

    gender: Yup.string()
      .oneOf(["MAN", "WOMAN"], t("userRegisterRequest.invalidGender"))
      .required(t("userRegisterRequest.genderRequired")),

    phoneNumber: Yup.string().required(t("userRegisterRequest.phoneNumberRequired"))
      .test("phoneNumber", t("userRegisterRequest.invalidPhoneNumber"), (value) => {
        if (!value) {
          return false;
        }
        try {
          return isValidPhoneNumber(value);
        }
        catch (error) {
          return false;
        }
      })
  });
};

export const usePostCreateSchema = () => {
  const { t } = useTranslation();

  return Yup.object({
    title: Yup.string().required(t("postCreateRequest.titleRequired")),
    text: Yup.string().required(t("postCreateRequest.textRequired"))
  })
}

