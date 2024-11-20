
"use client";
import React from "react";
import {IconProps, BookmarkFill} from "react-bootstrap-icons";

export const CI_BookmarkFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkFill {...props}/>
        </>
    );
}
