
"use client";
import React from "react";
import {IconProps, OctagonFill} from "react-bootstrap-icons";

export const CI_OctagonFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <OctagonFill {...props}/>
        </>
    );
}
