from icrawler.builtin import GoogleImageCrawler
from icrawler.downloader import ImageDownloader
import requests
import json

response = requests.get("https://gist.githubusercontent.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071/raw/30fb98f124445596a2a96f60a233ab13d07167d0/flowers.json")
flowers = json.loads(response.text)

google_crawler = GoogleImageCrawler(storage={'root_dir': 'C:\\Users\\Vedroid\Desktop\\flowers\\site\\img\\zz'})
filter = dict(
    type='photo')
for item in flowers['flowerlist']:
    google_crawler.crawl(keyword=item['name'], max_num=1, filters=filter, min_size=(400,400), max_size=(600,600), file_idx_offset='auto')