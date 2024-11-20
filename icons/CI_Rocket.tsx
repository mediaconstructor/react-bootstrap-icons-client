
"use client";
import React from "react";
import {IconProps, Rocket} from "react-bootstrap-icons";

export const CI_Rocket : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Rocket {...props}/>
        </>
    );
}
