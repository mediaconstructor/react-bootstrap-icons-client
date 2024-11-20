
"use client";
import React from "react";
import {IconProps, Trash} from "react-bootstrap-icons";

export const CI_Trash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Trash {...props}/>
        </>
    );
}
