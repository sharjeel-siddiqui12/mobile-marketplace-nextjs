'use client;'

import classes from './page.module.css';
import ImagePicker from '@/components/mobile/image-picker';
import { shareMobile } from '@/lib/actions';

export default function ShareMobilePage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite mobile</span>
        </h1>
        <p>Or any other mobile you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMobile} >
          <div className={classes.row}>
            <p className={classes.inputGroup}>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p className={classes.inputGroup}>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="specifications">Specifications</label>
            <textarea
              id="specifications"
              name="specifications"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Mobile</button>
          </p>
        </form>
      </main>
    </>
  );
}