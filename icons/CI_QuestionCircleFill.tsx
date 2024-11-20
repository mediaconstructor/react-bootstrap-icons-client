
"use client";
import React from "react";
import {IconProps, QuestionCircleFill} from "react-bootstrap-icons";

export const CI_QuestionCircleFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QuestionCircleFill {...props}/>
        </>
    );
}
