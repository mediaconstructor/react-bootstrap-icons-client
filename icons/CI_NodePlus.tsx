
"use client";
import React from "react";
import {IconProps, NodePlus} from "react-bootstrap-icons";

export const CI_NodePlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <NodePlus {...props}/>
        </>
    );
}
