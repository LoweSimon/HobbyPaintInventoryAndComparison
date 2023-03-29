import puppeteer from "puppeteer-extra";
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AdBlockerPlugin from 'puppeteer-extra-plugin-adblocker';
puppeteer.use(AdBlockerPlugin()).use(StealthPlugin());

import * as fs from 'fs';



const getPaint = async () => {

  

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();


  await page.goto("https://www.goblingaming.co.uk/collections/paints-citadel", {
    waitUntil: "domcontentloaded",
  });

  while(await page.$(".next a")){
    
    const paints = await page.evaluate(() => {
        const paintItem = document.querySelectorAll(".product-grid__item");
        return Array.from(paintItem).map((paint) => {
          const title = paint.querySelector(".product__title").innerText;
          const price = paint.querySelector(".product__price").innerText;

          return { title, price };
          
          
      });
      
    });
    await page.click(".next a");
    console.log(paints);

    await fs.writeFile("../paint-data/goblin-citadel-paint.json", JSON.stringify(paints));

  }
  
  await browser.close();
};

getPaint();