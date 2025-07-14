"use server";

import { saveMobile } from "./mobiles";
import {redirect} from "next/navigation";
import slugify from "slugify";
export async function shareMobile(formData) {

  const mobile = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    specifications: formData.get("specifications"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMobile(mobile);

  console.log(mobile);
  redirect("/mobiles");

}
