import puppeteer from "puppeteer";

const urls = [
    "https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-layer-1",
    "https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-base",
    "https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints/citadel-shade",
];

const scrape = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    new Promise(async (resolve, reject) => {
        for (url of urls)   {
            await page.goto(`${url}`, {
                waitUntil: "networkidle2",
                timeout: 60 * 1000,
            });

            await page.waitForSelector(".productgrid", {
                waitUntil: "networkidle2",
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
        }
        resolve(true)
    })
    .then(async () => {
        await browser.close();
    })
    .catch((reason) => {
        console.log(reason);
    });
};

scrape();