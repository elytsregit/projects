from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://www.newegg.com/Video-Cards-Video-Devices/Category/ID-38?Tpk=graphics%20card'

#opening up connection, grabbing html
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()
#html parsing
page_soup = soup(page_html, "html.parser")

filename = "products.csv"
f = open(filename, "w")

headers = "product_name, shipping\n"
f.write("headers")

#grabs each product container
containers = page_soup.findAll("div",{"class" : "item-container"})

for container in containers:

	title_container = container.findAll("a", {"class":"item-title"})
	product_name = title_container[0].text

	shipping_container = container.findAll("li",{"class":"price-ship"})
	shipping_price = shipping_container[0].text.strip()

	print("product_name:  " + product_name)
	print("shipping:  " + shipping_price)

	f.write(product_name.replace(",", "|") + "," +shipping_price + "\n")

f.close()