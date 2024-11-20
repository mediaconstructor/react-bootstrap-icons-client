
"use client";
import React from "react";
import {IconProps, Amazon} from "react-bootstrap-icons";

export const CI_Amazon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Amazon {...props}/>
        </>
    );
}
