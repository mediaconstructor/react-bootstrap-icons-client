
"use client";
import React from "react";
import {IconProps, ThermometerLow} from "react-bootstrap-icons";

export const CI_ThermometerLow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ThermometerLow {...props}/>
        </>
    );
}
