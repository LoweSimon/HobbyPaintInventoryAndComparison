import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer
    .use(StealthPlugin())
    .launch({ headless: true })
    .then(async browser => {
        const page = await browser.newPage()
        await page.goto('https://www.waylandgames.co.uk/159-citadel-paints')

        let pagesToScrape = 16;
        let currentPage = 1;

        while (currentPage < pagesToScrape) {
            const quotes = await page.evaluate(() => {
                
                const quoteList = document.querySelectorAll(".product-container");

                return Array.from(quoteList).map((quote) => {
                const title = quote.querySelector(".product-name").innerText;
                const price = quote.querySelector(".product-price").innerText;

                return { title, price };
                });
            });

        console.log(quotes);

        if (currentPage <= pagesToScrape)    {
            await page.click(".pagination_next a");
            await page.waitForSelector(".product-container");
            await page.waitForSelector(".pagination_next a")
        } 
        currentPage++;

        }



        // await page.screenshot({ path: '../paint-data/stealth.png', fullPage: true })
        await browser.close()
    })