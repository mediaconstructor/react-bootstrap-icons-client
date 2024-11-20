
"use client";
import React from "react";
import {IconProps, WindowDock} from "react-bootstrap-icons";

export const CI_WindowDock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WindowDock {...props}/>
        </>
    );
}
