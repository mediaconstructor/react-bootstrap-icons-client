
"use client";
import React from "react";
import {IconProps, HospitalFill} from "react-bootstrap-icons";

export const CI_HospitalFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HospitalFill {...props}/>
        </>
    );
}
