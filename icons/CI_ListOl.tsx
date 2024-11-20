
"use client";
import React from "react";
import {IconProps, ListOl} from "react-bootstrap-icons";

export const CI_ListOl : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListOl {...props}/>
        </>
    );
}
