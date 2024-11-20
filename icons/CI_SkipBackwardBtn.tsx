
"use client";
import React from "react";
import {IconProps, SkipBackwardBtn} from "react-bootstrap-icons";

export const CI_SkipBackwardBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SkipBackwardBtn {...props}/>
        </>
    );
}
