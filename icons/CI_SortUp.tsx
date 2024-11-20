
"use client";
import React from "react";
import {IconProps, SortUp} from "react-bootstrap-icons";

export const CI_SortUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SortUp {...props}/>
        </>
    );
}
