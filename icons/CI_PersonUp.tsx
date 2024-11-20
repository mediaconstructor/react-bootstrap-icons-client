
"use client";
import React from "react";
import {IconProps, PersonUp} from "react-bootstrap-icons";

export const CI_PersonUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonUp {...props}/>
        </>
    );
}
