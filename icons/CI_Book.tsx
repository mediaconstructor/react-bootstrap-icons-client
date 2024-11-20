
"use client";
import React from "react";
import {IconProps, Book} from "react-bootstrap-icons";

export const CI_Book : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Book {...props}/>
        </>
    );
}
