
"use client";
import React from "react";
import {IconProps, Pip} from "react-bootstrap-icons";

export const CI_Pip : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Pip {...props}/>
        </>
    );
}
