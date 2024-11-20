
"use client";
import React from "react";
import {IconProps, TypeItalic} from "react-bootstrap-icons";

export const CI_TypeItalic : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TypeItalic {...props}/>
        </>
    );
}
