
"use client";
import React from "react";
import {IconProps, FilePlay} from "react-bootstrap-icons";

export const CI_FilePlay : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePlay {...props}/>
        </>
    );
}
