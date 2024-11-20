
"use client";
import React from "react";
import {IconProps, AirplaneEngines} from "react-bootstrap-icons";

export const CI_AirplaneEngines : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AirplaneEngines {...props}/>
        </>
    );
}
