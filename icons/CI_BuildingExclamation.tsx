
"use client";
import React from "react";
import {IconProps, BuildingExclamation} from "react-bootstrap-icons";

export const CI_BuildingExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingExclamation {...props}/>
        </>
    );
}
