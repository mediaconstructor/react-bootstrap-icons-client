
"use client";
import React from "react";
import {IconProps, SortNumericDown} from "react-bootstrap-icons";

export const CI_SortNumericDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SortNumericDown {...props}/>
        </>
    );
}
