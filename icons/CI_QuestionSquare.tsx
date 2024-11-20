
"use client";
import React from "react";
import {IconProps, QuestionSquare} from "react-bootstrap-icons";

export const CI_QuestionSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QuestionSquare {...props}/>
        </>
    );
}
