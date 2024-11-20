
"use client";
import React from "react";
import {IconProps, Bookshelf} from "react-bootstrap-icons";

export const CI_Bookshelf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bookshelf {...props}/>
        </>
    );
}
