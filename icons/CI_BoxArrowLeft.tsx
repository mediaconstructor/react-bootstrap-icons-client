
"use client";
import React from "react";
import {IconProps, BoxArrowLeft} from "react-bootstrap-icons";

export const CI_BoxArrowLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoxArrowLeft {...props}/>
        </>
    );
}
