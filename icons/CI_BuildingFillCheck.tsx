
"use client";
import React from "react";
import {IconProps, BuildingFillCheck} from "react-bootstrap-icons";

export const CI_BuildingFillCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingFillCheck {...props}/>
        </>
    );
}
