
"use client";
import React from "react";
import {IconProps, Pass} from "react-bootstrap-icons";

export const CI_Pass : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Pass {...props}/>
        </>
    );
}
