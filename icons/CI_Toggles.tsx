
"use client";
import React from "react";
import {IconProps, Toggles} from "react-bootstrap-icons";

export const CI_Toggles : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Toggles {...props}/>
        </>
    );
}
