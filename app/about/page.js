import React from "react";
import Link from "next/link";
import Header from "@/components/header";

const About = () => {
  return (
    <>
      <Header />
      <h1>About</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
};

export default About;
