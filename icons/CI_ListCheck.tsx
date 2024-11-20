
"use client";
import React from "react";
import {IconProps, ListCheck} from "react-bootstrap-icons";

export const CI_ListCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListCheck {...props}/>
        </>
    );
}
