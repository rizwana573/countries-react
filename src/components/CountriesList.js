import React, { useEffect, useState } from "react";
//import countriesData from '../../countriesData'
import CountryCard from "./CountryCard";
import ShimmerList from "./ShimmerList";

export default function CountriesList({ query, region }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
    //  const intervalId = setInterval( () => {
    //    console.log("hii")
    //  }, 1000
    //  )

    //  return () => {
    //   console.log("clean up");
    //  // clearInterval(intervalId);
    //  }
  }, []);

  const filteredCountries = countriesData.filter((country) => {
    const matchesQuery = country.name.common
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesRegion =
      region === "" || country.region.toLowerCase() === region.toLowerCase();
    return matchesQuery && matchesRegion;
  });
  return countriesData.length === 0 ? (
    <ShimmerList />
  ) : (
    <div className="countries-container">
      {filteredCountries.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        );
      })}
    </div>
  );
}
