
"use client";
import React from "react";
import {IconProps, CupHot} from "react-bootstrap-icons";

export const CI_CupHot : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CupHot {...props}/>
        </>
    );
}
