
"use client";
import React from "react";
import {IconProps, TypeStrikethrough} from "react-bootstrap-icons";

export const CI_TypeStrikethrough : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TypeStrikethrough {...props}/>
        </>
    );
}
