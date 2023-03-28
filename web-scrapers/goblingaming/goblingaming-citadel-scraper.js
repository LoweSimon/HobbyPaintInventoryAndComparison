import puppeteer from "puppeteer";

const websites = ['https://elementgames.co.uk/', 'https://www.waylandgames.co.uk/'];

for (const url of websites) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const title = await page.title();
  console.log(title);
  await browser.close();
}


// import puppeteer from "puppeteer";


// const getPaint = async () => {

  

//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: null,
//   });

//   const page = await browser.newPage();


//   await page.goto("https://www.goblingaming.co.uk/collections/paints-citadel", {
//     waitUntil: "domcontentloaded",
//   });

//   while(await page.$(".next a")){
//     await page.click(".next a");
//     const paints = await page.evaluate(() => {
//         const paintItem = document.querySelectorAll(".product-grid__item");
//         return Array.from(paintItem).map((paint) => {
//           const title = paint.querySelector(".product__title").innerText;
//           const price = paint.querySelector(".product__price").innerText;

//           return { title, price };
//       });
//     });
//     console.log(paints);

//   }

//   await browser.close();
// };

// getPaint();