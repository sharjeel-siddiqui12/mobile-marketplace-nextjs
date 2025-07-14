import classes from "./navbar.module.css";
import React from "react";
import Image from "next/image";
import logoImage from "@/assets/icon/logo.jpg";
import Link from "next/link";
import Navlink from "@/components/nav-link";

function Header() {
  return (
    <main>
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image
            className="w-12 h-12 "
            src={logoImage}
            alt="Next Overview Logo"
          />
          Mobile App
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href={"/mobiles"}>Browse Mobiles</Navlink>
            </li>
            <li>
              <Navlink href={"/community"}>Join Community</Navlink>
            </li>
            <li>
              <Navlink href={"/contact"}>Contact Us</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default Header;
