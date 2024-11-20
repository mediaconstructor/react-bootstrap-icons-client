
"use client";
import React from "react";
import {IconProps, BroadcastPin} from "react-bootstrap-icons";

export const CI_BroadcastPin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BroadcastPin {...props}/>
        </>
    );
}
