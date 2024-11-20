
"use client";
import React from "react";
import {IconProps, BodyText} from "react-bootstrap-icons";

export const CI_BodyText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BodyText {...props}/>
        </>
    );
}
