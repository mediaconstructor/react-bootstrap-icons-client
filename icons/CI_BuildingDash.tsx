
"use client";
import React from "react";
import {IconProps, BuildingDash} from "react-bootstrap-icons";

export const CI_BuildingDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingDash {...props}/>
        </>
    );
}
