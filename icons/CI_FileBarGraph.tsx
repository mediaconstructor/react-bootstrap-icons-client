
"use client";
import React from "react";
import {IconProps, FileBarGraph} from "react-bootstrap-icons";

export const CI_FileBarGraph : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileBarGraph {...props}/>
        </>
    );
}
