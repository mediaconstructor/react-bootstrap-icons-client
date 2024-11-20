
"use client";
import React from "react";
import {IconProps, Battery} from "react-bootstrap-icons";

export const CI_Battery : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Battery {...props}/>
        </>
    );
}
