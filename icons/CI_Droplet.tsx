
"use client";
import React from "react";
import {IconProps, Droplet} from "react-bootstrap-icons";

export const CI_Droplet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Droplet {...props}/>
        </>
    );
}
