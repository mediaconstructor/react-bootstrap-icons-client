
"use client";
import React from "react";
import {IconProps, CursorFill} from "react-bootstrap-icons";

export const CI_CursorFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CursorFill {...props}/>
        </>
    );
}
