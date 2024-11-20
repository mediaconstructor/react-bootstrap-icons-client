
"use client";
import React from "react";
import {IconProps, SkipStartBtn} from "react-bootstrap-icons";

export const CI_SkipStartBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SkipStartBtn {...props}/>
        </>
    );
}
