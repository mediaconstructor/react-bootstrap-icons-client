
"use client";
import React from "react";
import {IconProps, FilterCircle} from "react-bootstrap-icons";

export const CI_FilterCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilterCircle {...props}/>
        </>
    );
}
