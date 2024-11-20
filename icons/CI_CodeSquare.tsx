
"use client";
import React from "react";
import {IconProps, CodeSquare} from "react-bootstrap-icons";

export const CI_CodeSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CodeSquare {...props}/>
        </>
    );
}
