
"use client";
import React from "react";
import {IconProps, LayoutSidebarInset} from "react-bootstrap-icons";

export const CI_LayoutSidebarInset : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutSidebarInset {...props}/>
        </>
    );
}
