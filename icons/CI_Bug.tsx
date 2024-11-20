
"use client";
import React from "react";
import {IconProps, Bug} from "react-bootstrap-icons";

export const CI_Bug : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bug {...props}/>
        </>
    );
}
