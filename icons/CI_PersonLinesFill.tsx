
"use client";
import React from "react";
import {IconProps, PersonLinesFill} from "react-bootstrap-icons";

export const CI_PersonLinesFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonLinesFill {...props}/>
        </>
    );
}
