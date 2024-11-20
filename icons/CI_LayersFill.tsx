
"use client";
import React from "react";
import {IconProps, LayersFill} from "react-bootstrap-icons";

export const CI_LayersFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayersFill {...props}/>
        </>
    );
}
