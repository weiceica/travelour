import requests
import json
import sys
import dateparser
from datetime import datetime, timedelta

def hotel_search(city, checkin_date_raw):
    city = "New York"
    url = "https://booking-com.p.rapidapi.com/v1/hotels/locations"
    querystring = {"name":str(city),"locale":"en-us"}

    headers = {
        "X-RapidAPI-Key": "3de4017fc6mshba19b7688371e02p121936jsnfbd063d970a2",
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
    }

    destID_response = requests.request("GET", url, headers=headers, params=querystring)
    data = json.loads(destID_response.text)
    dest_id = data[0]['dest_id']

    room_num = 1
    checkin_date = dateparser.parse(checkin_date_raw).strftime("%Y-%m-%d")
    next_date_obj = datetime.strptime(checkin_date, "%Y-%m-%d") + timedelta(days=1)
    checkout_date = datetime.strftime(next_date_obj, "%Y-%m-%d")
    num_adults = 2
    num_children = 2

    url = "https://booking-com.p.rapidapi.com/v1/hotels/search"
    querystring = {
        "room_number": str(room_num), 
        "checkin_date":str(checkin_date), 
        "checkout_date": str(checkout_date), 
        "dest_id": str(dest_id), 
        "adults_number": str(num_adults), 
        "children_number":str(num_children),
        "dest_type":"city", 
        "locale":"en-gb", 
        "order_by":"popularity", 
        "filter_by_currency":"USD",
        "units":"metric", 
        "page_number":"0",
        "include_adjacency":"true",
        "categories_filter_ids":"class::2, class::4, free_cancellation::1"
    }
    
    response = requests.request("GET", url, headers=headers, params=querystring)

    final_data = json.loads(response.text)
    return final_data

def main():
    # get_db()
    loc = sys.argv[1]
    date = dateparser.parse(sys.argv[2]).strftime("%Y-%m-%d")
    print(loc, date)
    hotel_search(loc, date)

if __name__ == '__main__':
    main()
