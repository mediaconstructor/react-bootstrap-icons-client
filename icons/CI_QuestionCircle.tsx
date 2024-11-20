
"use client";
import React from "react";
import {IconProps, QuestionCircle} from "react-bootstrap-icons";

export const CI_QuestionCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QuestionCircle {...props}/>
        </>
    );
}
