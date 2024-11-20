
"use client";
import React from "react";
import {IconProps, PlusCircle} from "react-bootstrap-icons";

export const CI_PlusCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PlusCircle {...props}/>
        </>
    );
}
