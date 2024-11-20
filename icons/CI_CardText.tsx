
"use client";
import React from "react";
import {IconProps, CardText} from "react-bootstrap-icons";

export const CI_CardText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CardText {...props}/>
        </>
    );
}
