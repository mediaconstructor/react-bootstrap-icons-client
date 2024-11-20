
"use client";
import React from "react";
import {IconProps, WrenchAdjustable} from "react-bootstrap-icons";

export const CI_WrenchAdjustable : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WrenchAdjustable {...props}/>
        </>
    );
}
