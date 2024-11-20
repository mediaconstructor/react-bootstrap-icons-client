
"use client";
import React from "react";
import {IconProps, Cast} from "react-bootstrap-icons";

export const CI_Cast : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cast {...props}/>
        </>
    );
}
