
"use client";
import React from "react";
import {IconProps, SdCard} from "react-bootstrap-icons";

export const CI_SdCard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SdCard {...props}/>
        </>
    );
}
