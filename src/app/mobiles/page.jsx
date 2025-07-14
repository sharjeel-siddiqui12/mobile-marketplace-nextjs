import React from "react";
import { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MobileGrid from "@/components/mobile/mobile-grid";
import { getMobiles } from "@/lib/mobiles";

async function Mobile() {
  const mobile = await getMobiles();

  return <MobileGrid mobile={mobile} />;
}

 function page() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Best mobile, uploaded{" "}
          <span className={classes.highlight}>according</span> to your budget plan
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          aspernatur maxime rem, facilis adipisci ipsum exercitationem mollitia
          aut, corporis dolore iste suscipit eos asperiores natus. Labore maxime
          corporis sapiente quaerat.
        </p>
        <p className={classes.cta}>
          <Link href={"/mobiles/share"}>Share your mobile</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading mobile...</p>}>
          <Mobile />
        </Suspense>
      </main>
    </>
  );
}

export default page;
