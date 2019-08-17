const request = require("request-promise");
const cheerio = require("cheerio")
const fs = require("fs")

async function main() {
  //Get the website using require
  const html = await request.get("https://reactnativetutorial.net/css-selectors/");

  //Write the scraped web to the html file
  fs.writeFileSync("./sample.html", html);

  //Cheerio to use jquery things
  const $ = await cheerio.load(html);

  const h1Text = $("h1").text();

  console.log(h1Text);
}

main()
