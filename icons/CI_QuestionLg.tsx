
"use client";
import React from "react";
import {IconProps, QuestionLg} from "react-bootstrap-icons";

export const CI_QuestionLg : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QuestionLg {...props}/>
        </>
    );
}
