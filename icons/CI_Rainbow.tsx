
"use client";
import React from "react";
import {IconProps, Rainbow} from "react-bootstrap-icons";

export const CI_Rainbow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Rainbow {...props}/>
        </>
    );
}
