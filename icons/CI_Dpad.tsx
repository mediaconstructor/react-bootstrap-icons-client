
"use client";
import React from "react";
import {IconProps, Dpad} from "react-bootstrap-icons";

export const CI_Dpad : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Dpad {...props}/>
        </>
    );
}
