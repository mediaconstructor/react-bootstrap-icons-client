
"use client";
import React from "react";
import {IconProps, BoxSeamFill} from "react-bootstrap-icons";

export const CI_BoxSeamFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoxSeamFill {...props}/>
        </>
    );
}
