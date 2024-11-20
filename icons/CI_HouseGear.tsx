
"use client";
import React from "react";
import {IconProps, HouseGear} from "react-bootstrap-icons";

export const CI_HouseGear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HouseGear {...props}/>
        </>
    );
}
