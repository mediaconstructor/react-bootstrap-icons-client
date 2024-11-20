
"use client";
import React from "react";
import {IconProps, ListUl} from "react-bootstrap-icons";

export const CI_ListUl : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListUl {...props}/>
        </>
    );
}
