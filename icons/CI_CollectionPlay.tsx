
"use client";
import React from "react";
import {IconProps, CollectionPlay} from "react-bootstrap-icons";

export const CI_CollectionPlay : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CollectionPlay {...props}/>
        </>
    );
}
