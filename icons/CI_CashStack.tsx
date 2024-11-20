
"use client";
import React from "react";
import {IconProps, CashStack} from "react-bootstrap-icons";

export const CI_CashStack : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CashStack {...props}/>
        </>
    );
}
