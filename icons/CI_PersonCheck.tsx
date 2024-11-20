
"use client";
import React from "react";
import {IconProps, PersonCheck} from "react-bootstrap-icons";

export const CI_PersonCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonCheck {...props}/>
        </>
    );
}
