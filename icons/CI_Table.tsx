
"use client";
import React from "react";
import {IconProps, Table} from "react-bootstrap-icons";

export const CI_Table : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Table {...props}/>
        </>
    );
}
