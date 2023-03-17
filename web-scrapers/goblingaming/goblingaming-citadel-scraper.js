import puppeteer from "puppeteer";

// TODO: Now it's your turn to improve the scraper and make him get more data from the Quotes to Scrape website.
// Here's a list of potential improvements you can make:
// - Navigate between all pages using the "Next" button and fetch the quotes on all the pages
// - Fetch the quote's tags (each quote has a list of tags)
// - Scrape the author's about page (by clicking on the author's name on each quote)
// - Categorize the quotes by tags or authors (it's not 100% related to the scraping itself, but that can be a good improvement)

const getPaint = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.goblingaming.co.uk/collections/paints-citadel", {
    waitUntil: "domcontentloaded",
  });

  let pagesToScrape = 16;
  let currentPage = 1;

  // Get page data
  while (currentPage < pagesToScrape) {
    const quotes = await page.evaluate(() => {
        // Fetch the first element with class "quote"
        // Get the displayed text and returns it
        const quoteList = document.querySelectorAll(".product-grid__item");

        // Convert the quoteList to an iterable array
        // For each quote fetch the text and author
        return Array.from(quoteList).map((quote) => {
        // Get the sub-elements from the previously fetched quote element
        const title = quote.querySelector(".product__title").innerText;
        const price = quote.querySelector(".product__price").innerText;

        return { title, price };
        });
    });

    // Display the quotes
    console.log(quotes);

    // Click on the "Next page" button
    if (currentPage < pagesToScrape)    {
        await page.click(".next > a");
        await page.waitForSelector(".product-grid__item");
        await page.waitForSelector(".next a")
    } else if (currentPage == 16)   {
        await page.waitForSelector(".product-grid__item");
    }
    currentPage++;

}

  // Close the browser
  await browser.close();
};

// Start the scraping
getPaint();





// import * as cheerio from 'cheerio';
// import fetch from 'node-fetch';
// import * as fs from 'fs';

// async function getGoblinCitadelPaint()   {
//     try {
//         // fetching data from url and store the response
//         const response = await fetch('https://www.goblingaming.co.uk/collections/paints-citadel');
//         // converting the reponse to text format
//         const body = await response.text();

//         // loading body data
//         const $ = cheerio.load(body);

//         // creating an empty array
//         const items = [];

//         // selecting the required classes for the paint information
//         $('.product-grid > .product-grid__item').map((i, el)  =>  {
//             const paintTitle = $(el).find('.product__title').text();
//             const paintPrice = $(el).find('.product__price').text();

//             // adding items to the array
//             items.push({
//                 paintTitle,
//                 paintPrice
//             });
//         });

//         // creating .json file with results
//         console.log(items);
//         var itemsString = JSON.stringify(items, null, 2);
//         fs.writeFile("../paint-data/goblin-citadel-paint.json", itemsString, function(err, result)  {
//             if(err) console.log('error', err);
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// getGoblinCitadelPaint();