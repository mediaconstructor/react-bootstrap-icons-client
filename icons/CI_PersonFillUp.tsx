
"use client";
import React from "react";
import {IconProps, PersonFillUp} from "react-bootstrap-icons";

export const CI_PersonFillUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillUp {...props}/>
        </>
    );
}
