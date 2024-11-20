
"use client";
import React from "react";
import {IconProps, FullscreenExit} from "react-bootstrap-icons";

export const CI_FullscreenExit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FullscreenExit {...props}/>
        </>
    );
}
