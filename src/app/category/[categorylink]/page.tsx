import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next'
import {PageItem} from "@/_interfaces/menu.interface";
import React from "react";




export default function Page({ params }: { params: { categorylink: string } }) {

    return <h1>{params.categorylink}</h1>
}