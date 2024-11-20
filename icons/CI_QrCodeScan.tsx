
"use client";
import React from "react";
import {IconProps, QrCodeScan} from "react-bootstrap-icons";

export const CI_QrCodeScan : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QrCodeScan {...props}/>
        </>
    );
}
