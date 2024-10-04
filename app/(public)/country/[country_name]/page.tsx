import { countries } from "@/app/(public)/countries";
import Link from "next/link";
import React from "react";

export default function CountryDetails({ params }: { params: { country_name: string } }) {

  const country = countries.find(c => c.name.toLowerCase() === params.country_name.toLowerCase());

  if (!country) {
    return <h1 className="text-3xl">Country not found</h1>;
  }

  return (
    <>
      <div>
        <h1>{country.name.toUpperCase()}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>

        <Link href="/country">
          Back to Country List
        </Link>
      </div>
    </>
  );
}