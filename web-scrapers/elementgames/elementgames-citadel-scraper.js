import puppeteer from "puppeteer";
import { StealthPlugin } from 'puppeteer-extra-plugin-stealth';

const websites = [
    'https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base', 
    'https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-technical',
    'https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-contrast',
];

for (const url of websites) {
  const browser = await puppeteer
    .use(StealthPlugin())
    .launch({ headless: true })
    .then(async browser => {
        const page = await browser.newPage();
        await page.goto(url);
        const title = await page.title();
        console.log(title);
        await browser.close();
      });
};


// import * as cheerio from 'cheerio';
// import fetch from 'node-fetch';
// import * as fs from 'fs';


// async function getElementCitadelPaint()   {
//     try {
//         // fetching data from url and store the response
//         const response = await fetch('https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base');
//         // converting the reponse to text format
//         const body = await response.text();

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
//         var itemsString = JSON.stringify(items, null, 2);
//         fs.writeFile("../paint-data/elementgames-citadel-paint.json", itemsString, function(err, result)  {
//             if(err) console.log('error', err);
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// getElementCitadelPaint();