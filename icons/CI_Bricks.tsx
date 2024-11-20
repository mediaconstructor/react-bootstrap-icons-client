
"use client";
import React from "react";
import {IconProps, Bricks} from "react-bootstrap-icons";

export const CI_Bricks : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bricks {...props}/>
        </>
    );
}
