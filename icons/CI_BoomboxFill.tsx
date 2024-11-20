
"use client";
import React from "react";
import {IconProps, BoomboxFill} from "react-bootstrap-icons";

export const CI_BoomboxFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoomboxFill {...props}/>
        </>
    );
}
