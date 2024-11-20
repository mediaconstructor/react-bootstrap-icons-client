
"use client";
import React from "react";
import {IconProps, Activity} from "react-bootstrap-icons";

export const CI_Activity : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Activity {...props}/>
        </>
    );
}
