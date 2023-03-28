import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import * as fs from 'fs';

async function getElementCitadelPaint()   {
    try {
        // fetching data from url and store the response
        const response = await fetch('');
        // converting the reponse to text format
        const body = await response.text();

        // loading body data
        const $ = cheerio.load(body);

        // creating an empty array
        const items = [];

        // selecting the required classes for the paint information
        $('.productgrid > .productinfo').map((i, el)  =>  {
            const paintTitle = $(el).find('.producttitle').text();
            const paintPrice = $(el).find('.price').text();

            // adding items to the array
            items.push({
                paintTitle,
                paintPrice
            });
        });

        // creating .json file with results
        console.log(items);
        var itemsString = JSON.stringify(items, null, 2);
        fs.writeFile("../paint-data/elementgames-vallejo-paint.json", itemsString, function(err, result)  {
            if(err) console.log('error', err);
        });

    } catch (error) {
        console.log(error);
    }
}

getElementCitadelPaint();