
"use client";
import React from "react";
import {IconProps, FileEarmarkBarGraph} from "react-bootstrap-icons";

export const CI_FileEarmarkBarGraph : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkBarGraph {...props}/>
        </>
    );
}
