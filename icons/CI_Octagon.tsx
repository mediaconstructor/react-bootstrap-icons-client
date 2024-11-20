
"use client";
import React from "react";
import {IconProps, Octagon} from "react-bootstrap-icons";

export const CI_Octagon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Octagon {...props}/>
        </>
    );
}
