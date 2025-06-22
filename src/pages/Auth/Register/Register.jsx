import React, { useState } from "react";
import { useFormik } from "formik";
import {
    TextField,
    MenuItem,
    Container,
    Box,
    IconButton,
    InputAdornment,
    Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox } from 'primereact/checkbox';
import { register } from "../../../services/AuthService";
import { UserReqisterRequest } from "../../../utils/Requests";
import { useUserReqisterSchema } from "../../../utils/ValidationSchemas";
import { useTranslation } from "react-i18next";
import PhoneNumberInput from "../../../components/PhoneNumberInput/PhoneNumberInput";
import { showToastMessage } from "../../../utils/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton.jsx"
import { ToastMessage } from "../../../utils/Enums";
import pageRoutes from "../../../route/pageRoutes.jsx";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false);
    const [extraDisableDurationActive, setExtraDisableDurationActive] = useState(false);
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD formatında bugünü al
    const errorColorCode = "#9c1f1f";
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const durationTime = 3000;

    const handleNext = () => {
        formik.handleSubmit();
        setStep(2)
    }
    const handleBack = () => {
        setStep(1);
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }
    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword((prev) => !prev);
    }

    const disableButton = (durationTime) => {
        setExtraDisableDurationActive(true);
        setTimeout(() => {
            setExtraDisableDurationActive(false);
        }, durationTime);
    };

    const handleRegister = async (values) => {
        try {
            formik.values.birthday = new Date(values.birthday).toISOString().split("T")[0];

            const formattedValues = {
                ...values,
            };

            setIsRequestSent(true);
            const tempResponse = await register(formattedValues);
            if (!tempResponse.status) {
                showToastMessage(t("userReqisterRequest.unexpectedError"), ToastMessage.ERROR, durationTime);
            }
            const response = await tempResponse.json();
            console.log(response)

            if (response.meta.code !== "200") {
                showToastMessage(response.meta.errorMessage, ToastMessage.WARNING,
                    durationTime);
            }

            else if (response.meta.code === "200") {
                disableButton(durationTime);
                showToastMessage(
                    t("userRegisterRequest.userRegisterSuccess"),
                    ToastMessage.SUCCESS,
                    durationTime);
                setTimeout(() => {
                    navigate("/auth/login", {
                        state: {
                            username: formik.values.username,
                            password: formik.values.password
                        }
                    });
                }, durationTime);
            }

        } catch (error) {
            showToastMessage(t("userRegisterRequest.unexpectedError"), ToastMessage.ERROR, durationTime);
        }
        finally {
            setIsRequestSent(false);
        }
    }

    const formik = useFormik({
        initialValues: UserReqisterRequest,
        validationSchema: useUserReqisterSchema(),
        onSubmit: (values) => {
            console.log(values)
            handleRegister(values);
        }
    });

    return (
        <Container maxWidth="lg" className="w-full">
            <Box className="bg-white flex flex-col p-6" sx={{ width: "50vw", mt: 5, p: 3, boxShadow: 3, borderRadius: 10 }}>
                <div
                    className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6" variant="h4"
                >
                    {
                        t("userRegisterRequest.register")
                    }
                </div>
                <div className="mb-2">
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Adım {step}/2</span>
                        <span className="text-sm font-medium text-gray-700">
                            {step == 1 ? "Kişisel Bilgiler" : "İletişim ve Güvenlik"}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(100 / (1 / step)) / 2}%` }}>
                        </div>
                    </div>
                </div>
                <form className="w-[500] flex flex-col gap-3" onSubmit={formik.handleSubmit} style={{ textAlign: "left" }}>
                    <div
                        className="flex"
                        style={{ justifyContent: "space-between", gap: "20px" }}>
                        {
                            step == 1 ?
                                (
                                    <div className="w-full">
                                        {
                                            [
                                                { label: t("userRegisterRequest.name"), name: "name" },
                                                { label: t("userRegisterRequest.surname"), name: "surname" },
                                                { label: t("userRegisterRequest.username"), name: "username" },
                                                { label: t("userRegisterRequest.email"), name: "email", type: "email" },
                                            ].map(({ label, name }) => (
                                                <div className="flex flex-col gap-1" key={name}>
                                                    <div
                                                        style={{ height: "10px", color: errorColorCode }}
                                                    >
                                                        {formik.touched[name] && formik.errors[name]}
                                                    </div>
                                                    <TextField
                                                        sx={{
                                                            borderRadius: "10px"
                                                        }}
                                                        slotProps={{
                                                            input: {
                                                                className: "rounded-[10px] h-[50px]",
                                                            }
                                                        }}
                                                        type="text"
                                                        label={label}
                                                        margin="normal"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values[name]}
                                                    />
                                                </div>
                                            ))
                                        }
                                        <div className="w-full">
                                            <Button
                                                onClick={handleNext}
                                                variant="contained"
                                                className="p-0 m-0 bg-blue-700 w-full hover:bg-blue-600"
                                                fullWidth
                                            >
                                                {t("next")}
                                            </Button>
                                        </div>
                                    </div>
                                )

                                :
                                (
                                    <div className="flex flex-col w-full gap-1">
                                        <div>
                                            <TextField
                                                fullWidth
                                                label={t("userRegisterRequest.password")}
                                                type={showPassword ? "text" : "password"}
                                                variant="outlined"
                                                name="password"
                                                margin="normal"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <div
                                                style={{ height: "15px", color: errorColorCode }}>
                                                {
                                                    formik.touched["password"] && formik.errors["password"]
                                                }
                                            </div>

                                        </div>


                                        {/* Repeat Password Field */}
                                        <div>
                                            <TextField
                                                fullWidth
                                                label={t("userRegisterRequest.repeatPassword")}
                                                type={showRepeatPassword ? "text" : "password"}
                                                variant="outlined"
                                                name="repeat_password"
                                                margin="normal"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.repeat_password || ""}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={toggleRepeatPasswordVisibility}
                                                                edge="end"
                                                            >
                                                                {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <div style={{ height: "15px", color: errorColorCode }}>
                                                {formik.touched["repeat_password"] && formik.errors["repeat_password"]}
                                            </div>

                                        </div>
                                        <div>
                                            <TextField
                                                sx={{ textAlign: "left" }}
                                                fullWidth
                                                select
                                                label={t("userRegisterRequest.gender")}
                                                name="gender"
                                                margin="normal"
                                                onChange={formik.handleChange}
                                                variant="outlined"
                                                onBlur={formik.handleBlur}
                                                value={formik.values.gender}
                                            >
                                                <MenuItem value="MAN">{t("userRegisterRequest.male")}</MenuItem>
                                                <MenuItem value="WOMAN">{t("userRegisterRequest.female")}</MenuItem>
                                            </TextField>

                                            <div style={{ height: "15px", color: errorColorCode }}>{formik.touched["gender"] && formik.errors["gender"]}</div>
                                        </div>
                                        <div style={{ marginTop: "15px", height: "100px", display: "flex", gap: "15px", flexDirection: "column" }}>
                                            <label style={{ color: "darkslategray" }}>
                                                {t("userRegisterRequest.phoneNumber")}
                                            </label>
                                            <PhoneNumberInput
                                                name="phoneNumber"
                                                value={formik.values.phoneNumber}
                                                onChange={(name, value, countryCode) => {
                                                    formik.setFieldValue(name, value);
                                                    formik.setFieldValue("extensionNumber", countryCode);
                                                }}
                                            />

                                            <p className={"text-[#9c1f1f]"}>
                                                {
                                                    formik.touched["phoneNumber"] && formik.errors["phoneNumber"]
                                                }
                                            </p>

                                        </div>
                                        <div>
                                            <div>
                                                <TextField
                                                    fullWidth
                                                    type="date"
                                                    name="birthday"
                                                    margin="normal"
                                                    variant="standard"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.birthday}
                                                    inputProps={{ max: today }}
                                                />
                                                <div style={{ height: "15px", color: errorColorCode }}>{formik.touched["birthday"] && formik.errors["birthday"]}</div>
                                            </div>
                                        </div>
                                        <div className="flex align-items-center">
                                            <Checkbox />
                                            <label className="ml-2">{"Accept Terms"}</label>
                                        </div>
                                        <div className="w-full flex flex-row gap-2">
                                            <Button
                                                onClick={handleBack}
                                                variant="contained"
                                                className="m-0 p-0 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition duration-200"
                                                fullWidth
                                            >
                                                {t("back")}
                                            </Button>
                                            <Button
                                                onClick={formik.handleSubmit}
                                                variant="contained"
                                                className="p-0 m-0 bg-blue-700 w-full hover:bg-blue-600"
                                                fullWidth
                                            >
                                                {t("userRegisterRequest.register")}
                                            </Button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                    <div className="flex flex-col align-items-center gap-[30px]">
                        <div className="flex align-items-center justify-items-center gap-2">
                            {"Zaten bir hesabınız varsa "}
                            <Link to={pageRoutes.AUTH_LOGIN.path} className="text-blue-600 hover:text-blue-700">
                                {"giriş yapın."}
                            </Link>
                        </div>
                    </div>
                </form>
            </Box>
        </Container >
    );
};

export default Register;