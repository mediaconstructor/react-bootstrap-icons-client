
"use client";
import React from "react";
import {IconProps, UiRadios} from "react-bootstrap-icons";

export const CI_UiRadios : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UiRadios {...props}/>
        </>
    );
}
