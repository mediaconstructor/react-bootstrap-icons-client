
"use client";
import React from "react";
import {IconProps, Boxes} from "react-bootstrap-icons";

export const CI_Boxes : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Boxes {...props}/>
        </>
    );
}
