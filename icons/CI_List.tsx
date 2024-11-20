
"use client";
import React from "react";
import {IconProps, List} from "react-bootstrap-icons";

export const CI_List : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <List {...props}/>
        </>
    );
}
