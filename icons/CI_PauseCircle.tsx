
"use client";
import React from "react";
import {IconProps, PauseCircle} from "react-bootstrap-icons";

export const CI_PauseCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PauseCircle {...props}/>
        </>
    );
}
