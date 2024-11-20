
"use client";
import React from "react";
import {IconProps, BuildingLock} from "react-bootstrap-icons";

export const CI_BuildingLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingLock {...props}/>
        </>
    );
}
