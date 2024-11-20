
"use client";
import React from "react";
import {IconProps, Shuffle} from "react-bootstrap-icons";

export const CI_Shuffle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Shuffle {...props}/>
        </>
    );
}
