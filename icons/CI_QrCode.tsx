
"use client";
import React from "react";
import {IconProps, QrCode} from "react-bootstrap-icons";

export const CI_QrCode : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QrCode {...props}/>
        </>
    );
}
