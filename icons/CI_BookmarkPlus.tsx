
"use client";
import React from "react";
import {IconProps, BookmarkPlus} from "react-bootstrap-icons";

export const CI_BookmarkPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkPlus {...props}/>
        </>
    );
}
