import React from "react";
import classes from "./mobiles-grid.module.css";
import MobileItem from "./mobile-item";

export default function MobileGrid({ mobile }) {
  // Add safety check for undefined or empty mobile array
  if (!mobile || !Array.isArray(mobile) || mobile.length === 0) {
    return (
      <div className={classes.noMobiles}>
        <p>No mobiles found.</p>
      </div>
    );
  }

  return (
    <>
      <ul className={classes.meals}>
        {mobile.map((mobile) => (
          <li key={mobile.id}>
            <MobileItem {...mobile} />
          </li>
        ))}
      </ul>
    </>
  );
}
