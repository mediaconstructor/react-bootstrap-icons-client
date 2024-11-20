
"use client";
import React from "react";
import {IconProps, TextWrap} from "react-bootstrap-icons";

export const CI_TextWrap : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextWrap {...props}/>
        </>
    );
}
