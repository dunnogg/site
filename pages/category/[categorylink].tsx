import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next'
import {PageItem} from "@/app/interfaces/menu.interface";
import Layout from "./layout";
import React, {useState} from "react";
import {Button, Htag, Rating, Tag} from "@/app/components";
import {Rate} from "antd";

export const getStaticPaths = (async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/items');
    const data = await res.json();
    const paths = data.map((MenuItem: PageItem) => ({
        params: {categorylink: MenuItem.categorylink},
    }))
    return {
        paths,
        fallback: false, // false or "blocking"
    }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/items');
    const data = await res.json();
    return {props: {data}}
}) satisfies GetStaticProps<{
    data: PageItem
}>
export default function Page({
                                 data,
                             }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (<Layout>{1}</Layout>)
}