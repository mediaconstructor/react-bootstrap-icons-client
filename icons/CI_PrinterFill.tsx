
"use client";
import React from "react";
import {IconProps, PrinterFill} from "react-bootstrap-icons";

export const CI_PrinterFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PrinterFill {...props}/>
        </>
    );
}
