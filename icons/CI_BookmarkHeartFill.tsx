
"use client";
import React from "react";
import {IconProps, BookmarkHeartFill} from "react-bootstrap-icons";

export const CI_BookmarkHeartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkHeartFill {...props}/>
        </>
    );
}
