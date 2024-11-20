
"use client";
import React from "react";
import {IconProps, HdmiFill} from "react-bootstrap-icons";

export const CI_HdmiFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HdmiFill {...props}/>
        </>
    );
}
