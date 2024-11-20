
"use client";
import React from "react";
import {IconProps, BlockquoteLeft} from "react-bootstrap-icons";

export const CI_BlockquoteLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BlockquoteLeft {...props}/>
        </>
    );
}
