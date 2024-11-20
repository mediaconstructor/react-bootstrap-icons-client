
"use client";
import React from "react";
import {IconProps, SimFill} from "react-bootstrap-icons";

export const CI_SimFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SimFill {...props}/>
        </>
    );
}
