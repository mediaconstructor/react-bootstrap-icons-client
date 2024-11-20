
"use client";
import React from "react";
import {IconProps, BoxFill} from "react-bootstrap-icons";

export const CI_BoxFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoxFill {...props}/>
        </>
    );
}
