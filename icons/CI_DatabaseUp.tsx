
"use client";
import React from "react";
import {IconProps, DatabaseUp} from "react-bootstrap-icons";

export const CI_DatabaseUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DatabaseUp {...props}/>
        </>
    );
}
