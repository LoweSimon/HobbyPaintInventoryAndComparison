import puppeteer from "puppeteer";

const urls = [
    "https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-shade",
    "https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base",
];

const scraper = async () => {
    const browser = await puppeteer.launch({ headless: true });

    for (const [inde, url] of urls.entries())   {
        const page = await browser.newPage();

        await page.goto(`${url}`, {
            waitUntil: "networkidle2",
            timeout: 60 * 1000,
        });

        await page.waitForSelector(".view-count");

        await page.evaluate(() => ({
            paint: document.querySelector(".productgrid > .productinfo > .productitle").innerText,
            price: document.querySelector(".productgrid > .productinfo > .price").innerText
        })
        ).then(data => {
            console.log('response', data);
        }).catch(reason => {
            console.log('error', reason);
        }).finally(async () => {
            await page.close();
        })
    }
    await browser.close();
};

scraper();
// import * as cheerio from 'cheerio';
// import fetch from 'node-fetch';
// import * as fs from 'fs';

// async function getElementCitadelPaint()   {
//     try {
//         // fetching data from url and store the response
//         const response = await fetch('https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base');
//         // converting the reponse to text format
//         const body = await response.text();

//         console.log(body);

//         // loading body data
//         const $ = cheerio.load(body);

//         // creating an empty array
//         const items = [];

//         // selecting the required classes for the paint information
//         $('.productgrid > .productinfo').map((i, el)  =>  {
//             const paintTitle = $(el).find('.producttitle').text();
//             const paintPrice = $(el).find('.price').text();

//             // adding items to the array
//             items.push({
//                 paintTitle,
//                 paintPrice
//             });
//         });

//         // creating .json file with results
//         console.log(items);
//         var itemsString = JSON.stringify(items, null, 2);
//         fs.writeFile("../paint-data/elementgames-citadel-paint.json", itemsString, function(err, result)  {
//             if(err) console.log('error', err);
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// getElementCitadelPaint();