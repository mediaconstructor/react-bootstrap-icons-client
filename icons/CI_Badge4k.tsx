
"use client";
import React from "react";
import {IconProps, Badge4k} from "react-bootstrap-icons";

export const CI_Badge4k : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Badge4k {...props}/>
        </>
    );
}
