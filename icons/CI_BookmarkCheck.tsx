
"use client";
import React from "react";
import {IconProps, BookmarkCheck} from "react-bootstrap-icons";

export const CI_BookmarkCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BookmarkCheck {...props}/>
        </>
    );
}
