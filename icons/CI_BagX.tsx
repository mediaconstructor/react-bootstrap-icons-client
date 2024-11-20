
"use client";
import React from "react";
import {IconProps, BagX} from "react-bootstrap-icons";

export const CI_BagX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BagX {...props}/>
        </>
    );
}
