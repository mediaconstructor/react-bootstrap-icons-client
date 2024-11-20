
"use client";
import React from "react";
import {IconProps, Search} from "react-bootstrap-icons";

export const CI_Search : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Search {...props}/>
        </>
    );
}
