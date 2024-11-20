
"use client";
import React from "react";
import {IconProps, LayerForward} from "react-bootstrap-icons";

export const CI_LayerForward : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayerForward {...props}/>
        </>
    );
}
