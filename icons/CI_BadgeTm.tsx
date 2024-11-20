
"use client";
import React from "react";
import {IconProps, BadgeTm} from "react-bootstrap-icons";

export const CI_BadgeTm : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeTm {...props}/>
        </>
    );
}
