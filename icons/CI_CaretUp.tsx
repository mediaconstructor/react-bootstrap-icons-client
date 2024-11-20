
"use client";
import React from "react";
import {IconProps, CaretUp} from "react-bootstrap-icons";

export const CI_CaretUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretUp {...props}/>
        </>
    );
}
