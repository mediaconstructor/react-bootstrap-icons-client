
"use client";
import React from "react";
import {IconProps, Houses} from "react-bootstrap-icons";

export const CI_Houses : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Houses {...props}/>
        </>
    );
}
