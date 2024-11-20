
"use client";
import React from "react";
import {IconProps, Paragraph} from "react-bootstrap-icons";

export const CI_Paragraph : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Paragraph {...props}/>
        </>
    );
}
