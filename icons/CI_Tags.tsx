
"use client";
import React from "react";
import {IconProps, Tags} from "react-bootstrap-icons";

export const CI_Tags : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Tags {...props}/>
        </>
    );
}
