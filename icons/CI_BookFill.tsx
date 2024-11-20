
"use client";
import React from "react";
import {IconProps, BookFill} from "react-bootstrap-icons";

export const CI_BookFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookFill {...props}/>
        </>
    );
}
