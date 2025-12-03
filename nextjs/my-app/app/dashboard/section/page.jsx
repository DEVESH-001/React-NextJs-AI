import Link from "next/link";
import React from "react";

const Section = () => {
  return (
    <>
      <h1>Section</h1>
      <Link href={"/settings"}>Go to settings</Link>
      <br />
      <Link href={"/admin"}>Go to admin</Link>
    </>
  );
};

export default Section;
