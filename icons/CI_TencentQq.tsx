
"use client";
import React from "react";
import {IconProps, TencentQq} from "react-bootstrap-icons";

export const CI_TencentQq : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TencentQq {...props}/>
        </>
    );
}
