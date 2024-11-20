
"use client";
import React from "react";
import {IconProps, CardImage} from "react-bootstrap-icons";

export const CI_CardImage : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CardImage {...props}/>
        </>
    );
}
