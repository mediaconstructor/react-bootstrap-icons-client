
"use client";
import React from "react";
import {IconProps, PersonStandingDress} from "react-bootstrap-icons";

export const CI_PersonStandingDress : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonStandingDress {...props}/>
        </>
    );
}
