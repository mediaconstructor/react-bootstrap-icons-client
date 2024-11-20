
"use client";
import React from "react";
import {IconProps, Question} from "react-bootstrap-icons";

export const CI_Question : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Question {...props}/>
        </>
    );
}
