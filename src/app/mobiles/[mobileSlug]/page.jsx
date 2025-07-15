import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMobile } from "@/lib/mobiles";
import { notFound } from "next/navigation";

export default async function mobileDetailPage({ params }) {
    const { mobileSlug } = await params; // Await params
    const mobile = getMobile(mobileSlug);

    if (!mobile) {
        notFound();
    }

    mobile.specifications = mobile.specifications.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={mobile.image} alt={mobile.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1>{mobile.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${mobile.creator_email}`}>{mobile.creator}</a>
          </p>
          <p className={classes.summary}>{mobile.summary}</p>
        </div>
      </header>
      <main className={classes.specifications}>
        <p
          className={classes.specifications}
          dangerouslySetInnerHTML={{
            __html: mobile.specifications  || "No specifications provided.",
          }}
        >
          
        </p>
      </main>
    </>
   
  );
}
