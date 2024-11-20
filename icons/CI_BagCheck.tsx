
"use client";
import React from "react";
import {IconProps, BagCheck} from "react-bootstrap-icons";

export const CI_BagCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BagCheck {...props}/>
        </>
    );
}
