
"use client";
import React from "react";
import {IconProps, BadgeSd} from "react-bootstrap-icons";

export const CI_BadgeSd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeSd {...props}/>
        </>
    );
}
