
"use client";
import React from "react";
import {IconProps, StarFill} from "react-bootstrap-icons";

export const CI_StarFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <StarFill {...props}/>
        </>
    );
}
