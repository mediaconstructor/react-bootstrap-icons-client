
"use client";
import React from "react";
import {IconProps, EnvelopeHeart} from "react-bootstrap-icons";

export const CI_EnvelopeHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeHeart {...props}/>
        </>
    );
}
