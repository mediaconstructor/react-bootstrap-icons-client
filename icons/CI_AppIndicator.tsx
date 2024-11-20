
"use client";
import React from "react";
import {IconProps, AppIndicator} from "react-bootstrap-icons";

export const CI_AppIndicator : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AppIndicator {...props}/>
        </>
    );
}
