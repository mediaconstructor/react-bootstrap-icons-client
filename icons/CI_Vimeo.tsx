
"use client";
import React from "react";
import {IconProps, Vimeo} from "react-bootstrap-icons";

export const CI_Vimeo : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Vimeo {...props}/>
        </>
    );
}
