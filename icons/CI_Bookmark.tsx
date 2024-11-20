
"use client";
import React from "react";
import {IconProps, Bookmark} from "react-bootstrap-icons";

export const CI_Bookmark : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bookmark {...props}/>
        </>
    );
}
