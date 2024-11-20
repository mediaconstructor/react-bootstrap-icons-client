
"use client";
import React from "react";
import {IconProps, Disc} from "react-bootstrap-icons";

export const CI_Disc : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Disc {...props}/>
        </>
    );
}
