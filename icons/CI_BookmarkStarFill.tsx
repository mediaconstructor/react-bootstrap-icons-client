
"use client";
import React from "react";
import {IconProps, BookmarkStarFill} from "react-bootstrap-icons";

export const CI_BookmarkStarFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkStarFill {...props}/>
        </>
    );
}
