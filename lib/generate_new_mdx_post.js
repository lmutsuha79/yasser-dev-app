const fs = require("fs");
const path = require("path");
const create_slug = (name) => {
  return name.replace(" ", "-");
};

const POSTS_PATH = path.join(process.cwd(), "posts");
const POST_NAME_ARG = process.argv[2];
const FILE_PATH = path.join(POSTS_PATH, create_slug(POST_NAME_ARG) + ".mdx");

INITIAL_POST_CONTENT = `---
title: ${POST_NAME_ARG}
tags:
  - javaScript

date: 1999/06/13
excerpt: Higher-order functions in JavaScript are a special category of functions that either accept functions as an argument or return functions. On the other side
img: /posts_img/high_order_functions.jpg
url: how-does-swr-work-02122002
intro: "Higher-order functions in JavaScript are a special category of functions that either accept functions as an argument or return functions.
On the other side, if the function uses only primitives or objects as arguments or return values, these functions are first-order.
Higher-order functions provide the reusability benefit: the main behavior is provided by the higher-order function itself, and by accepting a function as an argument you extend that behavior at your will."
twitterId: "1533438264241442816"
slide: true
---
`;



try {
  if (fs.existsSync(FILE_PATH))
    throw new Error("⚠️ ⚠️ ⚠️ the file is allredy exist ⚠️ ⚠️ ⚠️");

  if (!POST_NAME_ARG || POST_NAME_ARG?.length === 0) {
    throw new Error("No Valide Post Name");
  }

  fs.open(FILE_PATH, "w", (err, file) => {
    if (err) throw err;
    fs.writeFileSync(FILE_PATH, INITIAL_POST_CONTENT);
    console.log("✅ ✅ ✅ ✅  File created and saved! ✅ ✅ ✅ ✅");
  });
} catch (err) {
  console.log(err);
}

