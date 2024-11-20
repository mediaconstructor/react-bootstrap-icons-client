
"use client";
import React from "react";
import {IconProps, BookmarkX} from "react-bootstrap-icons";

export const CI_BookmarkX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkX {...props}/>
        </>
    );
}
