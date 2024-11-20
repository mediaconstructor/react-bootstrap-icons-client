
"use client";
import React from "react";
import {IconProps, MinecartLoaded} from "react-bootstrap-icons";

export const CI_MinecartLoaded : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MinecartLoaded {...props}/>
        </>
    );
}
