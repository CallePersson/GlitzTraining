import React from "react";
import { styled } from "@glitz/react";
import { useNavigate } from "react-router-dom";
import { SkeletonElement, SkeletonType } from "../skeletons/SkeletonElement";

export const CountryCard = ({
  props: { name, population, region, capital, flags },
}) => {
  const navigate = useNavigate();
  return (
    <Item>
      <Card
        onClick={() => {
          navigate(`/${name.common}`);
        }}
        css={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <FlagContainer>
          <FlagImage src={flags.png} alt={name.common} />
        </FlagContainer>
        <InfoContainer>
          <Name>{name.common}</Name>
          <MetaDiv>
            <MetaSpan>Population:</MetaSpan>{" "}
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </MetaDiv>
          <MetaDiv>
            <MetaSpan>Region:</MetaSpan> {region}
          </MetaDiv>
          <MetaDiv>
            <MetaSpan>Capital:</MetaSpan> {capital}
          </MetaDiv>
        </InfoContainer>
      </Card>
    </Item>
  );
};

export const SkeletonCountryCard = () => {
  return (
    <Item>
      <Card>
        <FlagContainer>
          <SkeletonElement type={SkeletonType.MEDIUM_IMAGE} />
        </FlagContainer>
        <InfoContainer>
          <SkeletonElement type={SkeletonType.TITLE} width={"65%"} />
          <MetaDiv>
            <SkeletonElement type={SkeletonType.TEXT} width={"80%"} />
          </MetaDiv>
          <MetaDiv>
            <SkeletonElement type={SkeletonType.TEXT} width={"60%"} />
          </MetaDiv>
          <MetaDiv>
            <SkeletonElement type={SkeletonType.TEXT} width={"70%"} />
          </MetaDiv>
        </InfoContainer>
      </Card>
    </Item>
  );
};

const Item = styled.div({
  width: "25%",
  padding: {
    xy: 40,
  },
});

const Card = styled.div({
  borderRadius: 5,
  backgroundColor: "hsl(0, 0%, 100%)",
  boxShadow: "0 2px 6px 0px rgba(0, 0, 0, .1)",
});

const FlagContainer = styled.div({
  width: "100%",
  height: 180,
});

const InfoContainer = styled.div({
  padding: {
    xy: 20,
  },
  color: "hsl(200, 15%, 8%)",
  fontSize: 14,
});

const FlagImage = styled.img({
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  width: "100%",
  height: "100%",
});

const Name = styled.div({
  fontSize: 18,
  marginBottom: 10,
  fontWeight: 800,
});

const MetaDiv = styled.div({
  fontWeight: 400,
});

export const MetaSpan = styled.span({
  fontWeight: 600,
});
