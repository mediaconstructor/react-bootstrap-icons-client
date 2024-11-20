
"use client";
import React from "react";
import {IconProps, Display} from "react-bootstrap-icons";

export const CI_Display : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Display {...props}/>
        </>
    );
}
