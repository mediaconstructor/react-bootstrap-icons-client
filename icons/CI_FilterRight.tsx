
"use client";
import React from "react";
import {IconProps, FilterRight} from "react-bootstrap-icons";

export const CI_FilterRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilterRight {...props}/>
        </>
    );
}
