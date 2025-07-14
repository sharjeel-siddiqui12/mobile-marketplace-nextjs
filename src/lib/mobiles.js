  import sql from "better-sqlite3";
  import slugify from "slugify";
  import xss from "xss";
  import fs from "node:fs";

  const db = sql("mobiles.db");

export async function getMobiles() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Data Fetching Failed")
  return db.prepare("SELECT * FROM mobiles").all();
}

export function getMobile(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM mobiles WHERE slug = ?").get(slug);
}

export async function saveMobile(mobile) {
  // const { title, summary, specifications, image, creator, creator_email } = meal;

  // const result = db.prepare(
  //     'INSERT INTO meals (title, summary, specifications, image, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?)'
  // ).run(title, summary, specifications, image, creator, creator_email);

  // return result.changes > 0;
  mobile.slug = slugify(mobile.title, { lower: true, strict: true });
  mobile.specifications = xss(mobile.specifications);

  const extension = mobile.image.name.split(".").pop();
  const fileName = `${mobile.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await mobile.image.arrayBuffer();
  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("Failed to write image file");
      console.error("Error writing image file:", error);
      throw new Error("Failed to write image file");
    }
  });
  mobile.image = `/images/${fileName}`;

  //   db.prepare(
  //     "INSERT INTO meals (title, summary, specifications, image, creator, creator_email, slug) VALUES (?, ?, ?, ?, ?, ?, ?)"
  //   ).run(
  //     meal.title,
  //     meal.summary,
  //     meal.specifications,
  //     meal.image,
  //     meal.creator,
  //     meal.creator_email,
  //     meal.slug
  //   );
  //   return true;

  db.prepare(
    `INSERT INTO mobiles (title, summary, specifications, image, creator, creator_email, slug)
    VALUES (
        @title,
        @summary,
        @specifications,
        @image,
        @creator,
        @creator_email,
        @slug
    )`
  ).run(mobile);
}
