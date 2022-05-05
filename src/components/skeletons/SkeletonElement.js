import React from "react";
import { styled } from "@glitz/react";
import { GlitzClient } from "@glitz/core";
import transformers from "@glitz/transformers";
const glitz = new GlitzClient({ transformer: transformers() });

export const SkeletonType = {
  TEXT: "text",
  BIG_TEXT: "bigText",
  MULTI_LINE_TEXT: "multiLineText",
  TITLE: "title",
  BIG_TITLE: "bigTitle",
  MEDIUM_IMAGE: "mediumImage",
  GIANT_IMAGE: "giantImage",
  BIG_IMAGE: "bigImage",
};

export const SkeletonElement = ({ type, count, colour, width }) => {
  let key = 1;
  const arrayLength = count || 1;

  switch (type) {
    case SkeletonType.TEXT:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonText
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.BIG_TEXT:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonBigText
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.MULTI_LINE_TEXT:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonMultiLineText
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.TITLE:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonTitle
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.BIG_TITLE:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonBigTitle
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.MEDIUM_IMAGE:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonMediumImage
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.BIG_IMAGE:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonBigImage
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    case SkeletonType.GIANT_IMAGE:
      return Array.from({ length: arrayLength }, () => (
        <SkeletonGiantImage
          key={key++}
          css={{
            background: colour ? colour : "#e6e6e6",
            width: width ? width : "100%",
          }}
        />
      ));
    default:
      return <></>;
  }
};

const pulsating = glitz.injectStyle({
  animationName: {
    from: {
      opacity: "1",
    },
    to: {
      opacity: "0.3",
    },
  },
});

const skeleton = styled({
  margin: { y: 10, x: 0 },
  borderRadius: 5,
  animation: `${pulsating} 0.5s infinite alternate`,
});

export const SkeletonText = styled.div(skeleton, {
  height: 12,
});

export const SkeletonBigText = styled.div(skeleton, {
  height: 16,
});


export const SkeletonMultiLineText = styled.div(skeleton, {
  height: 12,
  ":nth-child(2n)": {
    width: "80%",
  },
  ":last-of-type": {
    width: "60%",
  },
});

export const SkeletonTitle = styled.div(skeleton, {
  height: 20,
  marginBottom: 15,
});

export const SkeletonBigTitle = styled.div(skeleton, {
  height: 30,
  marginBottom: 15,
});

export const SkeletonMediumImage = styled.div(skeleton, {
  margin: { y: 0, x: 0 },
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  height: 180,
});

export const SkeletonBigImage = styled.div(skeleton, {
  height: 250,
  maxWidth: 650,
});

export const SkeletonGiantImage = styled.div(skeleton, {
  height: 350,
  maxWidth: 650,
});
