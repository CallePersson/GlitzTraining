import React, { useEffect, useState, useContext } from "react";
import { styled } from "@glitz/react";
import { useParams, useNavigate } from "react-router-dom";
import { MetaSpan } from "../start/CountryCard";
import { SkeletonElement, SkeletonType } from "../skeletons/SkeletonElement";

export const DetailPage = () => {
  const [country, setCountry] = useState([]);

  const navigate = useNavigate();
  let { countryParam } = useParams();

  let url = `https://restcountries.com/v3.1/name/${countryParam}?fullText=true`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCountry(json);
      });
  }, []);
  console.log(country);
  return (
    <Container>
      <BackButton
        onClick={() => {
          navigate(`/`);
        }}
      >
        Back
      </BackButton>
      {country.length < 1 && <SkeletonDetailPage />}
      {country &&
        country.map((country) => {
          let nativeLanguage;
          let currency;
          let languages = [];
          for (var key in country.name.nativeName) {
            nativeLanguage = key;
          }
          for (var key in country.currencies) {
            currency = key;
          }
          for (const [key, value] of Object.entries(country.languages)) {
            languages.push(value);
          }
          return (
            <DetailsContainer key={`${country.latlng[0]}${country.latlng[1]}`}>
              <FlagContainer>
                <FlagImage src={country.flags.svg} />
              </FlagContainer>
              <DataContainer>
                <h1>{country.name.common}</h1>
                <DataBox>
                  <div>
                    <div>
                      <MetaSpan>Native name: </MetaSpan>
                      {country.name.nativeName[nativeLanguage].common}
                    </div>
                    <div>
                      <MetaSpan>Population: </MetaSpan>
                      {country.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div>
                      <MetaSpan>Region: </MetaSpan>
                      {country.region}
                    </div>
                    <div>
                      <MetaSpan>Sub Region: </MetaSpan>
                      {country.subregion}
                    </div>
                    <div>
                      <MetaSpan>Captial: </MetaSpan>
                      {country.capital[0]}
                    </div>
                  </div>
                  <div>
                    <div>
                      <MetaSpan>Top Level Domain: </MetaSpan>
                      {country.tld}
                    </div>
                    <div>
                      <MetaSpan>Currencies: </MetaSpan>
                      {country.currencies[currency].name}
                    </div>
                    <div>
                      <MetaSpan>Languages: </MetaSpan>
                      {languages.length > 1
                        ? languages.map((lang) => `${lang}, `)
                        : languages.map((lang) => lang)}
                    </div>
                  </div>
                </DataBox>
              </DataContainer>
            </DetailsContainer>
          );
        })}
    </Container>
  );
};

export const SkeletonDetailPage = () => {
  return (
    <Container>
      <DetailsContainer>
        <FlagContainer>
          <SkeletonElement type={SkeletonType.GIANT_IMAGE} />
        </FlagContainer>
        <DataContainer>
          <SkeletonElement type={SkeletonType.BIG_TITLE} width={"30%"} />
          <DataBox>
            <div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"250px"} />
              </styled.Div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"200px"} />
              </styled.Div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"250px"} />
              </styled.Div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"200px"} />
              </styled.Div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"170px"} />
              </styled.Div>
            </div>
            <div>
            <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"200px"} />
              </styled.Div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"170px"} />
              </styled.Div>
              <styled.Div css={{marginBottom: 20}}>
                <SkeletonElement type={SkeletonType.BIG_TEXT} width={"200px"} />
              </styled.Div>
            </div>
          </DataBox>
        </DataContainer>
      </DetailsContainer>
    </Container>
  );
};

export const Container = styled.div({
  width: 1440,
  margin: {
    x: "auto",
    y: 0,
  },
});

const BackButton = styled.button({
  marginLeft: 40,
  marginTop: 60,
  marginBottom: 60,
  backgroundColor: "hsl(0, 0%, 100%)",
  border: "none",
  color: "hsl(200, 15%, 8%)",
  padding: { y: 10, x: 50 },
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: 16,
  borderRadius: 5,
  fontWeight: 600,
  boxShadow: "0 2px 6px 0px rgba(0, 0, 0, .1)",
  ":hover": {
    cursor: "pointer",
  },
});

const DetailsContainer = styled.div({
  margin: {
    x: 40,
    y: 0,
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const FlagContainer = styled.div({
  width: 600,
  height: 400,
});
const DataContainer = styled.div({
  width: 600,
  paddingTop: 25,
  paddingBottom: 25,
});

const DataBox = styled.div({
  marginTop: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  lineHeight: 2,
});

const FlagImage = styled.img({
  width: "100%",
  height: "100%",
});
