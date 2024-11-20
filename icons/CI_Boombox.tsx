
"use client";
import React from "react";
import {IconProps, Boombox} from "react-bootstrap-icons";

export const CI_Boombox : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Boombox {...props}/>
        </>
    );
}
