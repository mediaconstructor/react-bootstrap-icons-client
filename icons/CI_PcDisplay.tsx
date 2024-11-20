
"use client";
import React from "react";
import {IconProps, PcDisplay} from "react-bootstrap-icons";

export const CI_PcDisplay : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PcDisplay {...props}/>
        </>
    );
}
