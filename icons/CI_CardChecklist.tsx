
"use client";
import React from "react";
import {IconProps, CardChecklist} from "react-bootstrap-icons";

export const CI_CardChecklist : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CardChecklist {...props}/>
        </>
    );
}
