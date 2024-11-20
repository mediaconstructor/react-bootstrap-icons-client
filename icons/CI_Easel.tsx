
"use client";
import React from "react";
import {IconProps, Easel} from "react-bootstrap-icons";

export const CI_Easel : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Easel {...props}/>
        </>
    );
}
