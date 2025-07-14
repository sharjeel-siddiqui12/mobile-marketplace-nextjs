import React from "react";
import classes from "./page.module.css";

export default function Page() {
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.card}>
          <h1 className={classes.title}>Contact Us</h1>
          <p className={classes.description}>
            Have a question or feedback? We'd love to hear from you! Fill out
            the form below and our team will get back to you as soon as
            possible.
          </p>

          <div className={classes.formMapWrapper}>
            <div className={classes.formSection}>
              <form className={classes.form}>
                <label className={classes.label}>
                  Name:
                  <input
                    type="text"
                    name="name"
                    className={classes.input}
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className={classes.label}>
                  Email:
                  <input
                    type="email"
                    name="email"
                    className={classes.input}
                    placeholder="Your email"
                    required
                  />
                </label>

                <label className={classes.label}>
                  Subject:
                  <input
                    type="text"
                    name="subject"
                    className={classes.input}
                    placeholder="Subject of your message"
                    required
                  />
                </label>

                <label className={classes.label}>
                  Message:
                  <textarea
                    name="message"
                    className={classes.textarea}
                    placeholder="Your message"
                    rows="5"
                    required
                  />
                </label>

                <button type="submit" className={classes.button}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={classes.mapSection}>
             
              <div className={classes.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7097540089!2d66.4959539227841!3d25.192983650620572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1752487703138!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
