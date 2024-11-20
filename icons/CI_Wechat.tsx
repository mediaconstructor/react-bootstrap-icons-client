
"use client";
import React from "react";
import {IconProps, Wechat} from "react-bootstrap-icons";

export const CI_Wechat : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Wechat {...props}/>
        </>
    );
}
