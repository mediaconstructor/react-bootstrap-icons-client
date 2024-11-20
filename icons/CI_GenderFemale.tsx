
"use client";
import React from "react";
import {IconProps, GenderFemale} from "react-bootstrap-icons";

export const CI_GenderFemale : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GenderFemale {...props}/>
        </>
    );
}
