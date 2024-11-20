
"use client";
import React from "react";
import {IconProps, SearchHeart} from "react-bootstrap-icons";

export const CI_SearchHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SearchHeart {...props}/>
        </>
    );
}
