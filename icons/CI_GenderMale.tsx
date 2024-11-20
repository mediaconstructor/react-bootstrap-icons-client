
"use client";
import React from "react";
import {IconProps, GenderMale} from "react-bootstrap-icons";

export const CI_GenderMale : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GenderMale {...props}/>
        </>
    );
}
