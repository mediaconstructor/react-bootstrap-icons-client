
"use client";
import React from "react";
import {IconProps, Ticket} from "react-bootstrap-icons";

export const CI_Ticket : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Ticket {...props}/>
        </>
    );
}
