import React, { useEffect, useState, useContext } from "react";
import { CountryCard, SkeletonCountryCard } from "./CountryCard";
import { Filters } from "./Filters";
import { styled } from "@glitz/react";

const CallbackContext = React.createContext();
export function useCallbackContext() {
  return useContext(CallbackContext);
}

export const Start = () => {
  const [countries, setCountries] = useState([]);

  let url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
      });
  }, []);

  const searchCountry = (search) => {
    let url = "https://restcountries.com/v3.1/all";
    setCountries([]);
    
    if (!search) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setCountries(json);
        });
    } else {
      let searchUrl = `https://restcountries.com/v3.1/name/${search}`;
      fetch(searchUrl)
        .then((res) => res.json())
        .then((json) => {
          if (json.length > 0) {
            setCountries(json);
          } else {
            setCountries([]);
          }
        })
        .catch((error) => {
          console.log("hej");
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }
  };

  const filterRegion = (region) => {
    setCountries([]);
    if (!region) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setCountries(json);
        });
    } else {
      let regionUrl = `https://restcountries.com/v3.1/region/${region}`;

      fetch(regionUrl)
        .then((res) => res.json())
        .then((json) => {
          if (json.length > 0) {
            setCountries(json);
          } else {
            setCountries([]);
          }
        });
    }
  };

  return (
    <CallbackContext.Provider value={{ searchCountry, filterRegion }}>
      <Container>
        <Filters props={countries} />
        <Row>
          {countries.length < 1 && (
            <>
              <SkeletonCountryCard />
              <SkeletonCountryCard />
              <SkeletonCountryCard />
              <SkeletonCountryCard />
              <SkeletonCountryCard />
              <SkeletonCountryCard />
              <SkeletonCountryCard />
              <SkeletonCountryCard />
            </>
          )}
          {countries.map((country) => {
            return (
              <CountryCard
                key={`${country.latlng[0]}${country.latlng[1]}`}
                props={country}
              />
            );
          })}
        </Row>
      </Container>
    </CallbackContext.Provider>
  );
};

export const Container = styled.div({
  width: 1440,
  margin: {
    x: "auto",
    y: 0,
  },
});

const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  flexFlow: "wrap",
});
