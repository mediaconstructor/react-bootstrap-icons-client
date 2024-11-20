
"use client";
import React from "react";
import {IconProps, ListNested} from "react-bootstrap-icons";

export const CI_ListNested : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListNested {...props}/>
        </>
    );
}
