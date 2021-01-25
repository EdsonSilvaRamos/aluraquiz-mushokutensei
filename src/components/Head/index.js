import React from 'react';
import db from "../../../db.json";

export default function Head() {
  return (
    <>
      <meta name="og:title" property="og:title" content={db.title} />
      <meta
        name="og:description"
        property="og:description"
        content={db.description}
      />
      <meta
        property="og:url"
        content="https://aluraquiz-mushokutensei.edsonsilvaramos.vercel.app/"
      />
      <meta property="og:image" content={db.bg} />
    </>
  );
}
