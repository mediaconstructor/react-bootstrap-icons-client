
"use client";
import React from "react";
import {IconProps, Passport} from "react-bootstrap-icons";

export const CI_Passport : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Passport {...props}/>
        </>
    );
}
