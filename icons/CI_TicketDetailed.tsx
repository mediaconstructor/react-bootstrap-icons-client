
"use client";
import React from "react";
import {IconProps, TicketDetailed} from "react-bootstrap-icons";

export const CI_TicketDetailed : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TicketDetailed {...props}/>
        </>
    );
}
