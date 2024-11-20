
"use client";
import React from "react";
import {IconProps, InputCursor} from "react-bootstrap-icons";

export const CI_InputCursor : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <InputCursor {...props}/>
        </>
    );
}
