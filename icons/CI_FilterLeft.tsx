
"use client";
import React from "react";
import {IconProps, FilterLeft} from "react-bootstrap-icons";

export const CI_FilterLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilterLeft {...props}/>
        </>
    );
}
