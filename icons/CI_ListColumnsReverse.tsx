
"use client";
import React from "react";
import {IconProps, ListColumnsReverse} from "react-bootstrap-icons";

export const CI_ListColumnsReverse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ListColumnsReverse {...props}/>
        </>
    );
}
