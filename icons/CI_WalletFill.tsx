
"use client";
import React from "react";
import {IconProps, WalletFill} from "react-bootstrap-icons";

export const CI_WalletFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WalletFill {...props}/>
        </>
    );
}
