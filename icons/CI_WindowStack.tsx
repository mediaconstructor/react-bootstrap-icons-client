
"use client";
import React from "react";
import {IconProps, WindowStack} from "react-bootstrap-icons";

export const CI_WindowStack : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WindowStack {...props}/>
        </>
    );
}
