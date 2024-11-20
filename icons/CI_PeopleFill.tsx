
"use client";
import React from "react";
import {IconProps, PeopleFill} from "react-bootstrap-icons";

export const CI_PeopleFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PeopleFill {...props}/>
        </>
    );
}
