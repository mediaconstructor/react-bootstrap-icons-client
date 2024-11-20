
"use client";
import React from "react";
import {IconProps, BookmarksFill} from "react-bootstrap-icons";

export const CI_BookmarksFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarksFill {...props}/>
        </>
    );
}
