
"use client";
import React from "react";
import {IconProps, QuestionDiamond} from "react-bootstrap-icons";

export const CI_QuestionDiamond : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <QuestionDiamond {...props}/>
        </>
    );
}
