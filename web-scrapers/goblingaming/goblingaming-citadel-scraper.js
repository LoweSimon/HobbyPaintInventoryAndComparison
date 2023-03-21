import puppeteer from "puppeteer";


const getPaint = async () => {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();


  await page.goto("https://www.goblingaming.co.uk/collections/paints-citadel", {
    waitUntil: "domcontentloaded",
  });

  let pagesToScrape = 16;
  let currentPage = 1;

  while (currentPage < pagesToScrape) {
    const quotes = await page.evaluate(() => {
        
        const quoteList = document.querySelectorAll(".product-grid__item");

        return Array.from(quoteList).map((quote) => {
        const title = quote.querySelector(".product__title").innerText;
        const price = quote.querySelector(".product__price").innerText;

        return { title, price };
        });
    });

    console.log(quotes);

    if (currentPage <= pagesToScrape)    {
        await page.click(".next > a");
        await page.waitForSelector(".product-grid__item");
        await page.waitForSelector(".next a")
    } 
    currentPage++;

}

  await browser.close();
};

getPaint();