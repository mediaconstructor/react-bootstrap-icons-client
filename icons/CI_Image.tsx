
"use client";
import React from "react";
import {IconProps, Image} from "react-bootstrap-icons";

export const CI_Image : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Image {...props}/>
        </>
    );
}
