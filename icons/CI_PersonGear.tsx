
"use client";
import React from "react";
import {IconProps, PersonGear} from "react-bootstrap-icons";

export const CI_PersonGear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonGear {...props}/>
        </>
    );
}
