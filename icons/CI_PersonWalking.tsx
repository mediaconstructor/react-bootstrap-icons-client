
"use client";
import React from "react";
import {IconProps, PersonWalking} from "react-bootstrap-icons";

export const CI_PersonWalking : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonWalking {...props}/>
        </>
    );
}
