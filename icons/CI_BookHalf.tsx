
"use client";
import React from "react";
import {IconProps, BookHalf} from "react-bootstrap-icons";

export const CI_BookHalf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookHalf {...props}/>
        </>
    );
}
