
"use client";
import React from "react";
import {IconProps, DropletFill} from "react-bootstrap-icons";

export const CI_DropletFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DropletFill {...props}/>
        </>
    );
}
