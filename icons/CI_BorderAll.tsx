
"use client";
import React from "react";
import {IconProps, BorderAll} from "react-bootstrap-icons";

export const CI_BorderAll : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderAll {...props}/>
        </>
    );
}
