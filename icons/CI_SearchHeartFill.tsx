
"use client";
import React from "react";
import {IconProps, SearchHeartFill} from "react-bootstrap-icons";

export const CI_SearchHeartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SearchHeartFill {...props}/>
        </>
    );
}
