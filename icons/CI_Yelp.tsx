
"use client";
import React from "react";
import {IconProps, Yelp} from "react-bootstrap-icons";

export const CI_Yelp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Yelp {...props}/>
        </>
    );
}
