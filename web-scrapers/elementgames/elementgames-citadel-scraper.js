import puppeteer from "puppeteer-extra";
import AdBlockerPlugin from 'puppeteer-extra-plugin-adblocker';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
puppeteer.use(AdBlockerPlugin()).use(StealthPlugin());


const websites = [
    'https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base', 
    'https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-technical',
    'https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-contrast',
];

for (const url of websites) {
  await puppeteer
    .launch({ headless: true })
    .then(async browser => {
        const page = await browser.newPage();
        await page.goto(url);

        await page.waitForSelector(".productgrid", {
          waitUntil: "networkidel2",
          timeout: 60 * 1000,
        });

        const data = await page.evaluate(() => {
          return [
            JSON.stringify(document.querySelector(".producttitle").innerText),
            JSON.stringify(document.querySelector(".price").innerText),
          ];
        });

        const [paint, price] = [
          JSON.parse(data[0]),
          JSON.parse(data[1]),
        ];
        console.log({ paint, price });
        await browser.close();
      });
};