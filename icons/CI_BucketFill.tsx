
"use client";
import React from "react";
import {IconProps, BucketFill} from "react-bootstrap-icons";

export const CI_BucketFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BucketFill {...props}/>
        </>
    );
}
