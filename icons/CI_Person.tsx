
"use client";
import React from "react";
import {IconProps, Person} from "react-bootstrap-icons";

export const CI_Person : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Person {...props}/>
        </>
    );
}
