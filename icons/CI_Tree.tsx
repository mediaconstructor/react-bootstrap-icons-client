
"use client";
import React from "react";
import {IconProps, Tree} from "react-bootstrap-icons";

export const CI_Tree : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Tree {...props}/>
        </>
    );
}
