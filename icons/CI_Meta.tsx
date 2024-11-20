
"use client";
import React from "react";
import {IconProps, Meta} from "react-bootstrap-icons";

export const CI_Meta : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Meta {...props}/>
        </>
    );
}
