
"use client";
import React from "react";
import {IconProps, HouseCheck} from "react-bootstrap-icons";

export const CI_HouseCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HouseCheck {...props}/>
        </>
    );
}
