
"use client";
import React from "react";
import {IconProps, ListTask} from "react-bootstrap-icons";

export const CI_ListTask : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListTask {...props}/>
        </>
    );
}
