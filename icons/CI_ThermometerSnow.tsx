
"use client";
import React from "react";
import {IconProps, ThermometerSnow} from "react-bootstrap-icons";

export const CI_ThermometerSnow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ThermometerSnow {...props}/>
        </>
    );
}
