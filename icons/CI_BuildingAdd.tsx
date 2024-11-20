
"use client";
import React from "react";
import {IconProps, BuildingAdd} from "react-bootstrap-icons";

export const CI_BuildingAdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingAdd {...props}/>
        </>
    );
}
