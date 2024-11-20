
"use client";
import React from "react";
import {IconProps, Globe} from "react-bootstrap-icons";

export const CI_Globe : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Globe {...props}/>
        </>
    );
}
