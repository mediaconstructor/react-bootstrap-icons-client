
"use client";
import React from "react";
import {IconProps, BookmarkHeart} from "react-bootstrap-icons";

export const CI_BookmarkHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkHeart {...props}/>
        </>
    );
}
