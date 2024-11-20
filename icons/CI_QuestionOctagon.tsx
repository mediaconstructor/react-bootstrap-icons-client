
"use client";
import React from "react";
import {IconProps, QuestionOctagon} from "react-bootstrap-icons";

export const CI_QuestionOctagon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QuestionOctagon {...props}/>
        </>
    );
}
