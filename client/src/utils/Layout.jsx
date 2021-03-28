import React from "react";
import Footer from "../Components/global/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar></Navbar> -------- open comment for further new links ---------- */}
      {children}
      <Footer></Footer>
    </>
  );
}
