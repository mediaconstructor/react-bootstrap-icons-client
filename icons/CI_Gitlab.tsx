
"use client";
import React from "react";
import {IconProps, Gitlab} from "react-bootstrap-icons";

export const CI_Gitlab : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Gitlab {...props}/>
        </>
    );
}
