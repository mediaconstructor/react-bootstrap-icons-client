
"use client";
import React from "react";
import {IconProps, Signpost} from "react-bootstrap-icons";

export const CI_Signpost : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Signpost {...props}/>
        </>
    );
}
