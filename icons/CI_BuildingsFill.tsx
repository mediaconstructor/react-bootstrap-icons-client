
"use client";
import React from "react";
import {IconProps, BuildingsFill} from "react-bootstrap-icons";

export const CI_BuildingsFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BuildingsFill {...props}/>
        </>
    );
}
