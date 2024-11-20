
"use client";
import React from "react";
import {IconProps, ListColumns} from "react-bootstrap-icons";

export const CI_ListColumns : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListColumns {...props}/>
        </>
    );
}
