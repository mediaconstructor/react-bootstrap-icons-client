
"use client";
import React from "react";
import {IconProps, LayoutThreeColumns} from "react-bootstrap-icons";

export const CI_LayoutThreeColumns : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutThreeColumns {...props}/>
        </>
    );
}
