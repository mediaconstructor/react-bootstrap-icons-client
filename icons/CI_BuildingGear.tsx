
"use client";
import React from "react";
import {IconProps, BuildingGear} from "react-bootstrap-icons";

export const CI_BuildingGear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingGear {...props}/>
        </>
    );
}
