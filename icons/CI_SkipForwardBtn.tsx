
"use client";
import React from "react";
import {IconProps, SkipForwardBtn} from "react-bootstrap-icons";

export const CI_SkipForwardBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SkipForwardBtn {...props}/>
        </>
    );
}
