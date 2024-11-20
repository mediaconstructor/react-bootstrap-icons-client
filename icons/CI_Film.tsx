
"use client";
import React from "react";
import {IconProps, Film} from "react-bootstrap-icons";

export const CI_Film : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Film {...props}/>
        </>
    );
}
