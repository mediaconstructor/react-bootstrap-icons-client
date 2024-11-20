
"use client";
import React from "react";
import {IconProps, People} from "react-bootstrap-icons";

export const CI_People : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <People {...props}/>
        </>
    );
}
