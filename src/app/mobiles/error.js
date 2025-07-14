'use client';
import classes from './page.module.css'

export default function ErrorPage({error}) {
  return (
    <main className={classes.error}>
      <h1>Error Occurred</h1>
      <p>Failed to load meals data.</p>
      <p>Please try again later.</p>
    </main>
  );
}
