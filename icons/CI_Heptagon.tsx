
"use client";
import React from "react";
import {IconProps, Heptagon} from "react-bootstrap-icons";

export const CI_Heptagon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Heptagon {...props}/>
        </>
    );
}
