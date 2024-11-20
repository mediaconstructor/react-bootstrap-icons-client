
"use client";
import React from "react";
import {IconProps, Award} from "react-bootstrap-icons";

export const CI_Award : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Award {...props}/>
        </>
    );
}
