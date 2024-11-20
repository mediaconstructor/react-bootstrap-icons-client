
"use client";
import React from "react";
import {IconProps, Postage} from "react-bootstrap-icons";

export const CI_Postage : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Postage {...props}/>
        </>
    );
}
