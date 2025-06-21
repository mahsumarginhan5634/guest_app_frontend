import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import parsePhoneNumberFromString from "libphonenumber-js";


const PhoneNumberInput = ({ value, onChange, name }) => {
    const [phone, setPhone] = useState(value || "");

    const handleChange = (value) => {
        setPhone(value);
        let countryCode = "";

        if (value) {
            const phoneNumber = parsePhoneNumberFromString(value);
            if (phoneNumber) {
                countryCode = phoneNumber.countryCallingCode;
            }
        }
        onChange(name, value, countryCode);
    };


    useEffect(() => {
        setPhone(value || "");
    }, [value])

    return (
        <div style={{ height: "50px" }}>
            <div style={{ borderBottom: "1px solid black", paddingBottom: "5px" }}>
                <PhoneInput
                    numberInputProps={{
                        className: "border-[none]"
                    }}
                    countryCallingCodeEditable={false}
                    international
                    defaultCountry="TR"
                    value={phone}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default PhoneNumberInput;
