
"use client";
import React from "react";
import {IconProps, PersonFillGear} from "react-bootstrap-icons";

export const CI_PersonFillGear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillGear {...props}/>
        </>
    );
}
