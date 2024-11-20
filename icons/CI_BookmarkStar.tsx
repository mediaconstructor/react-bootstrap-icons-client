
"use client";
import React from "react";
import {IconProps, BookmarkStar} from "react-bootstrap-icons";

export const CI_BookmarkStar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkStar {...props}/>
        </>
    );
}
