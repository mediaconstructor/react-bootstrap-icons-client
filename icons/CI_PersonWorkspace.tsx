
"use client";
import React from "react";
import {IconProps, PersonWorkspace} from "react-bootstrap-icons";

export const CI_PersonWorkspace : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonWorkspace {...props}/>
        </>
    );
}
