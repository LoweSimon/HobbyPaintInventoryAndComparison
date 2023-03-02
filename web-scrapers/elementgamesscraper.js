// importing dependencies required for scraper
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import * as fs from 'fs';

async function getElementPaint()    {
    try {
        // fetching data from url and store the response
        const response = await fetch('https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base');
        // converting the reponse to text format
        const body = await response.text();

        // loading body data
        const $ = cheerio.load(body);

        // creating an empty array
        const items = [];

        // selecting the required classes for the paint information
        $('.productgrid > .productinfo').map((i, el) => {
            const paintTitle = $(el).find('.producttitle').text();
            const paintPrice = $(el).find('.price').text();
            const paintPicture = $(el).find('.productImage img').attr('src');

            // adding items to the array
            items.push({
                paintTitle,
                paintPrice,
                paintPicture
            });
        });

        // creating .json file with results
        var itemsString = JSON.stringify(items);
        fs.writeFile("elementpaints.json". itemsString, function(err, result)   {
            if(err) console.log('error', err);
        });
        
    } catch (error) {
        console.log(error);
    }
}

getElementPaint();