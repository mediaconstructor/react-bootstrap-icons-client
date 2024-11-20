
"use client";
import React from "react";
import {IconProps, ImageFill} from "react-bootstrap-icons";

export const CI_ImageFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ImageFill {...props}/>
        </>
    );
}
