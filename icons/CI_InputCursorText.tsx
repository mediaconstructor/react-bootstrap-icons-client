
"use client";
import React from "react";
import {IconProps, InputCursorText} from "react-bootstrap-icons";

export const CI_InputCursorText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <InputCursorText {...props}/>
        </>
    );
}
