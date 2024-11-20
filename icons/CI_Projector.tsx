
"use client";
import React from "react";
import {IconProps, Projector} from "react-bootstrap-icons";

export const CI_Projector : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Projector {...props}/>
        </>
    );
}
