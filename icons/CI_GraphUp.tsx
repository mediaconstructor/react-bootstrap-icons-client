
"use client";
import React from "react";
import {IconProps, GraphUp} from "react-bootstrap-icons";

export const CI_GraphUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GraphUp {...props}/>
        </>
    );
}
