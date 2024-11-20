
"use client";
import React from "react";
import {IconProps, BuildingFillDown} from "react-bootstrap-icons";

export const CI_BuildingFillDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingFillDown {...props}/>
        </>
    );
}
