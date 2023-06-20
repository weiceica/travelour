import requests
import json
from datetime import datetime, date
import dateparser
import sys

def weather_search(city, raw_day):
    # get the relative days offset
    today = date.today()
    query_date = dateparser.parse(raw_day).date()
    delta = query_date - today
    relative_days = delta.days
    # make the query
    url = "https://weatherapi-com.p.rapidapi.com/forecast.json"
    #example:check the weather in London, london changes to required cities
    querystring = {"q":city,"days":relative_days}
    headers = {
        "X-RapidAPI-Key": "eebb7cad51msh62d5499668882b4p178596jsndbec4efef724",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    json_data = json.loads(response.content)
    #get the weather condition and print it
    return json_data['forecast']['forecastday'][0]['day']['condition']['text']

def main():
    city = sys.argv[1]
    day = sys.argv[2]
    weather_search(city, day)

if __name__ == "__main__":
    main()