
"use client";
import React from "react";
import {IconProps, ReceiptCutoff} from "react-bootstrap-icons";

export const CI_ReceiptCutoff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ReceiptCutoff {...props}/>
        </>
    );
}
