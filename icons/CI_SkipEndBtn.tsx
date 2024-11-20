
"use client";
import React from "react";
import {IconProps, SkipEndBtn} from "react-bootstrap-icons";

export const CI_SkipEndBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SkipEndBtn {...props}/>
        </>
    );
}
