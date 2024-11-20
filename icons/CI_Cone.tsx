
"use client";
import React from "react";
import {IconProps, Cone} from "react-bootstrap-icons";

export const CI_Cone : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cone {...props}/>
        </>
    );
}
