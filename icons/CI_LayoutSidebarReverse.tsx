
"use client";
import React from "react";
import {IconProps, LayoutSidebarReverse} from "react-bootstrap-icons";

export const CI_LayoutSidebarReverse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutSidebarReverse {...props}/>
        </>
    );
}
