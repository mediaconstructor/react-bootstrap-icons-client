
"use client";
import React from "react";
import {IconProps, TicketDetailedFill} from "react-bootstrap-icons";

export const CI_TicketDetailedFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TicketDetailedFill {...props}/>
        </>
    );
}
