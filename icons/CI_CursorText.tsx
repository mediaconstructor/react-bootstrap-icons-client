
"use client";
import React from "react";
import {IconProps, CursorText} from "react-bootstrap-icons";

export const CI_CursorText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CursorText {...props}/>
        </>
    );
}
