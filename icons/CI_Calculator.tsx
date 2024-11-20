
"use client";
import React from "react";
import {IconProps, Calculator} from "react-bootstrap-icons";

export const CI_Calculator : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calculator {...props}/>
        </>
    );
}
