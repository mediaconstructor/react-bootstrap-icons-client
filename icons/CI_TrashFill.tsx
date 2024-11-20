
"use client";
import React from "react";
import {IconProps, TrashFill} from "react-bootstrap-icons";

export const CI_TrashFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TrashFill {...props}/>
        </>
    );
}
