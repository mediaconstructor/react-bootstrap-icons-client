
"use client";
import React from "react";
import {IconProps, LayoutSidebar} from "react-bootstrap-icons";

export const CI_LayoutSidebar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutSidebar {...props}/>
        </>
    );
}
