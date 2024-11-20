
"use client";
import React from "react";
import {IconProps, GenderAmbiguous} from "react-bootstrap-icons";

export const CI_GenderAmbiguous : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GenderAmbiguous {...props}/>
        </>
    );
}
