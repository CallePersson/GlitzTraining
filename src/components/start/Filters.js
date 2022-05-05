import React, { useState } from "react";
import { useCallbackContext } from "./Start";
import { styled } from "@glitz/react";

export const Filters = () => {
  const { searchCountry, filterRegion } = useCallbackContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCountry(searchTerm);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    filterRegion(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <SearchInput
            type="text"
            placeholder="🔍 Search for a country..."
            value={searchTerm}
            onChange={handleChange}
          />
          <RegionSelect value={selectedRegion} onChange={handleRegionChange}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </RegionSelect>
        </FormContainer>
      </form>
    </>
  );
};

const FormContainer = styled.div({
  width: 1440,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: {
    y: 0,
    x: 40,
  },
  margin: {
    x: "auto",
    top: 30,
    bottom: 0,
  },
})

const formDecorator = styled({
  width: 450,
  padding: {
    y: 12,
    x: 20,
  },
  margin: {
    y: 8,
    x: 0,
  },
  display: "inline-block",
  border: "0px solid",
  boxShadow: "0 2px 6px 0px rgba(0, 0, 0, .1)",
  borderRadius: 4,
  boxSizing: "border-box",
  ":focus": {
    outline: "1px solid #ccc",
  },
});

const SearchInput = styled.input(formDecorator, {
  // paddingLeft: 35,
  // background: `url("https://static.thenounproject.com/png/101791-200.png") no-repeat left`,
  // backgroundSize: 25,
});
const RegionSelect = styled.select(formDecorator, {
  width: 200,
  fontWeight: 600,
});
