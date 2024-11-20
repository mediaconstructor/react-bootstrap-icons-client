
"use client";
import React from "react";
import {IconProps, Hearts} from "react-bootstrap-icons";

export const CI_Hearts : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Hearts {...props}/>
        </>
    );
}
