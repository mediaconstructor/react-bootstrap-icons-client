
"use client";
import React from "react";
import {IconProps, BorderTop} from "react-bootstrap-icons";

export const CI_BorderTop : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderTop {...props}/>
        </>
    );
}
