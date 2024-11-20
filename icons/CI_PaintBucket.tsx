
"use client";
import React from "react";
import {IconProps, PaintBucket} from "react-bootstrap-icons";

export const CI_PaintBucket : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PaintBucket {...props}/>
        </>
    );
}
