
"use client";
import React from "react";
import {IconProps, BuildingCheck} from "react-bootstrap-icons";

export const CI_BuildingCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingCheck {...props}/>
        </>
    );
}
