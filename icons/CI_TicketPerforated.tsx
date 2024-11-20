
"use client";
import React from "react";
import {IconProps, TicketPerforated} from "react-bootstrap-icons";

export const CI_TicketPerforated : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TicketPerforated {...props}/>
        </>
    );
}
