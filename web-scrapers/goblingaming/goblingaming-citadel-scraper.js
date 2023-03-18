import puppeteer from "puppeteer";


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
  // - open the website
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