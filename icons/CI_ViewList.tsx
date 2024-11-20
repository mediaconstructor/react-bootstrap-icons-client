
"use client";
import React from "react";
import {IconProps, ViewList} from "react-bootstrap-icons";

export const CI_ViewList : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ViewList {...props}/>
        </>
    );
}
