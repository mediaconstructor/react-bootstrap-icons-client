
"use client";
import React from "react";
import {IconProps, UiRadiosGrid} from "react-bootstrap-icons";

export const CI_UiRadiosGrid : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UiRadiosGrid {...props}/>
        </>
    );
}
