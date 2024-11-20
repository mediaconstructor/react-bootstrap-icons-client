
"use client";
import React from "react";
import {IconProps, HandThumbsUp} from "react-bootstrap-icons";

export const CI_HandThumbsUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HandThumbsUp {...props}/>
        </>
    );
}
