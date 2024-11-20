
"use client";
import React from "react";
import {IconProps, FileBarGraphFill} from "react-bootstrap-icons";

export const CI_FileBarGraphFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileBarGraphFill {...props}/>
        </>
    );
}
