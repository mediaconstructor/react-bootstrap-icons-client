
"use client";
import React from "react";
import {IconProps, Cassette} from "react-bootstrap-icons";

export const CI_Cassette : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cassette {...props}/>
        </>
    );
}
