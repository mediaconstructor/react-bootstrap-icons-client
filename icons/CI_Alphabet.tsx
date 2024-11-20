
"use client";
import React from "react";
import {IconProps, Alphabet} from "react-bootstrap-icons";

export const CI_Alphabet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Alphabet {...props}/>
        </>
    );
}
