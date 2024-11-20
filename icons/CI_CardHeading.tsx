
"use client";
import React from "react";
import {IconProps, CardHeading} from "react-bootstrap-icons";

export const CI_CardHeading : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CardHeading {...props}/>
        </>
    );
}
