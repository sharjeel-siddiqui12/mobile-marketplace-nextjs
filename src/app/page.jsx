import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {

  

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
      </header>
      <div>
        <div className={classes.hero}>
          <h1>Welcome to Mobile App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            aliquid modi deleniti eos impedit doloribus exercitationem,
            consectetur ab amet excepturi non minima atque iste maxime
            repudiandae illum assumenda ratione voluptates?{" "}
          </p>
        </div>

        <div className={classes.cta}>
          <Link href="/mobiles">Explore the mobiles</Link>
          <Link href="/community">Join the community</Link>
        </div>
      </div>
      <main>
        <section className={classes.section}>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            excepturi mollitia numquam, asperiores illo nulla iure
            exercitationem facere, veritatis quasi error nam qui ipsa labore
            eaque suscipit, quos sunt odio!
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            perspiciatis amet suscipit at quidem mollitia incidunt harum
            repellat sequi magni qui, rem tenetur soluta odit dolorum aliquam
            doloremque eum odio.
          </p>
        </section>
      </main>
    </>
  );
}
