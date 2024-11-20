
"use client";
import React from "react";
import {IconProps, Buildings} from "react-bootstrap-icons";

export const CI_Buildings : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Buildings {...props}/>
        </>
    );
}
