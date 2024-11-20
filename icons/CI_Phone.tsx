
"use client";
import React from "react";
import {IconProps, Phone} from "react-bootstrap-icons";

export const CI_Phone : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Phone {...props}/>
        </>
    );
}
