
"use client";
import React from "react";
import {IconProps, WindowSidebar} from "react-bootstrap-icons";

export const CI_WindowSidebar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WindowSidebar {...props}/>
        </>
    );
}
