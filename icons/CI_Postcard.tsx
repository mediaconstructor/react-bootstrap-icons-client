
"use client";
import React from "react";
import {IconProps, Postcard} from "react-bootstrap-icons";

export const CI_Postcard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Postcard {...props}/>
        </>
    );
}
