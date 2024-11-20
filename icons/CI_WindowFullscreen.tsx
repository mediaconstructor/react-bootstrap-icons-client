
"use client";
import React from "react";
import {IconProps, WindowFullscreen} from "react-bootstrap-icons";

export const CI_WindowFullscreen : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WindowFullscreen {...props}/>
        </>
    );
}
