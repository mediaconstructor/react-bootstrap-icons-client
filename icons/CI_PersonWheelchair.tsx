
"use client";
import React from "react";
import {IconProps, PersonWheelchair} from "react-bootstrap-icons";

export const CI_PersonWheelchair : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonWheelchair {...props}/>
        </>
    );
}
