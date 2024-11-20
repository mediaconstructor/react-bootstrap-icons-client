
"use client";
import React from "react";
import {IconProps, PersonPlusFill} from "react-bootstrap-icons";

export const CI_PersonPlusFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonPlusFill {...props}/>
        </>
    );
}
