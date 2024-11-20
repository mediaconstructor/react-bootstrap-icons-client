
"use client";
import React from "react";
import {IconProps, Outlet} from "react-bootstrap-icons";

export const CI_Outlet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Outlet {...props}/>
        </>
    );
}
