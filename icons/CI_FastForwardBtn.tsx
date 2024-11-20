
"use client";
import React from "react";
import {IconProps, FastForwardBtn} from "react-bootstrap-icons";

export const CI_FastForwardBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FastForwardBtn {...props}/>
        </>
    );
}
