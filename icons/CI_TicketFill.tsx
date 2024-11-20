
"use client";
import React from "react";
import {IconProps, TicketFill} from "react-bootstrap-icons";

export const CI_TicketFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TicketFill {...props}/>
        </>
    );
}
