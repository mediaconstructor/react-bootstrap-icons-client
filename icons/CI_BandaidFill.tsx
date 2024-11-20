
"use client";
import React from "react";
import {IconProps, BandaidFill} from "react-bootstrap-icons";

export const CI_BandaidFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BandaidFill {...props}/>
        </>
    );
}
