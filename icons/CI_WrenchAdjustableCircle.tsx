
"use client";
import React from "react";
import {IconProps, WrenchAdjustableCircle} from "react-bootstrap-icons";

export const CI_WrenchAdjustableCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WrenchAdjustableCircle {...props}/>
        </>
    );
}
