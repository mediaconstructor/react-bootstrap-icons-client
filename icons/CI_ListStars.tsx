
"use client";
import React from "react";
import {IconProps, ListStars} from "react-bootstrap-icons";

export const CI_ListStars : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListStars {...props}/>
        </>
    );
}
