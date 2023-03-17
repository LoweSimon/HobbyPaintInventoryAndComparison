const puppeteer = require('puppeteer')

async function tutorial()   {
    try {
        const URL = 'https://www.goblingaming.co.uk/collections/paints-citadel'const browser = await puppeteer.launch({headless: false})

        await page.goto(URL)
        let pagesToScrape = 16;
        let currentPage = 1;
        let data = []
        while (currentPage <= pagesToScrape)    {
            let newResults = await page.evaluate(() =>  {
                let results = []
                let items = document.querySelectorAll('.product-grid__item')
                items.forEach((item) => {
                    results.push({
                        text: item.querySelector(class='product__title').innerText,
                    })
                })
                return results
            })
            data = data.concat(newResults)
            if (currentPage < pagesToScrape) {
                await page.click('.next a')
                await page.waitForSelector('.product-grid__item')
                await page.waitForSelector('.next a')
            }
            currentPage++;
        }
        console.log(data)
        await browser.close()
    } catch (error) {
        console.log(error)
    }
}

tutorial();






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