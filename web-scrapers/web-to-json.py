import requests
from bs4 import BeautifulSoup
import json

URL = "https://elementgames.co.uk/games-workshop/citadel-games-workshop-paints/citadel-base"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

results = soup.find_all(class_="productinfo")

paint_list = []

for description in results:
    title = description.find("h3", class_="producttitle").text
    price = description.find("span", class_="price").text.strip("\u00a3")
    
    print(title)
    print(price)
    print()
    
    for data in description:
        printed_paint = {
            'title': title,
            'price': price
        }

        paint_list.append(printed_paint)

with open('data.json', 'w') as f:
    json.dump(paint_list, f)