
"use client";
import React from "react";
import {IconProps, BoundingBoxCircles} from "react-bootstrap-icons";

export const CI_BoundingBoxCircles : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoundingBoxCircles {...props}/>
        </>
    );
}
