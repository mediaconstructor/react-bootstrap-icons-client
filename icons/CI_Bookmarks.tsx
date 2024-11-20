
"use client";
import React from "react";
import {IconProps, Bookmarks} from "react-bootstrap-icons";

export const CI_Bookmarks : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bookmarks {...props}/>
        </>
    );
}
