import { countries } from "@/app/(public)/countries"
import Link from "next/link"
import React from "react"


const countryList = countries.slice(0, 5).map((item, i) => {
    return <li key={i}>
        {i + 1} <Link href={`/country/${item.name}`}>{item.name}</Link>
    </li>
})

export default function Country() {
    return (
        <>
            <h1>Country List</h1>
            <ul>{countryList}</ul>
        </>
    )
}