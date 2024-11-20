
"use client";
import React from "react";
import {IconProps, PersonVcardFill} from "react-bootstrap-icons";

export const CI_PersonVcardFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonVcardFill {...props}/>
        </>
    );
}
