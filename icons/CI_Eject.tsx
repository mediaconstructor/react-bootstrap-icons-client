
"use client";
import React from "react";
import {IconProps, Eject} from "react-bootstrap-icons";

export const CI_Eject : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Eject {...props}/>
        </>
    );
}
