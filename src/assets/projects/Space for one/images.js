import React from "react";

import {
  Header,
  Paragraph,
  Section,
} from "../../../styled_components/Paragraph";
import img10 from "./10.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";

const images = [
  {
    id: 2,
    src: img2,
    alt: "foto 2 Space for one",
    text: null,
  },
  {
    id: 3,
    src: img3,
    alt: "foto 3 Space for one",
    text: null,
  },
  {
    id: 4,
    src: img4,
    alt: "foto 4 Space for one",
    text: null,
  },
  {
    id: 5,
    src: img5,
    alt: "foto 5 Space for one",
    text: null,
  },
  {
    id: 6,
    src: img6,
    alt: "foto 6 Space for one",
    text: null,
  },
  {
    id: 7,
    src: img7,
    alt: "foto 7 Space for one",
    text: null,
  },
  {
    id: 8,
    src: img8,
    alt: "foto 8 Space for one",
    text: null,
  },
  {
    id: 9,
    src: img9,
    alt: "foto 9 Space for one",
    text: null,
  },
  {
    id: 10,
    src: img10,
    alt: "foto 10 Space for one",
    text: null,
  },
  {
    id: 11,
    src: null,
    alt: null,
    text: () => {
      return (
        <Paragraph>
          <Header>Space for One</Header>
          <Section>
            This is an interior design of a small apartment for one person. The
            question was how to live generously even when the size of the space
            itself is not. There are only a few decisive pieces of furniture
            populating the apartment, seeking a relation between openness and
            privacy.
          </Section>
          <Section>
            The dialog between formal rigour and childish fascination is
            reflected in the simple yet playful geometry of the design. Neutral
            colours, soft materials and openness resonate with inhabitants
            character trough the space.
          </Section>

          <Section>
            2019 / interior design / 44 m2 / Ljubljana / Private client
            <br />
            Authors: Ada Finci Terseglav, Nika van Berkel
            <br />
            Photography: Klemen Ilovar
          </Section>
        </Paragraph>
      );
    },
  },
];

export const imageLoader = () => {
  return images;
};
