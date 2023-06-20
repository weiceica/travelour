from amadeus import Client, ResponseError
import airportsdata
from dateparser import parse
import sys

amadeus = Client(
    client_id='4ORCKsq1qEo6H7gwEkv8K3UxHsChDE3x',
    client_secret='hYM8OiIhUgoPJ8kc',
)

def find_iata_code(city_name:str):
    airports = airportsdata.load('IATA')
    for iata_code, airport in airports.items():
        if airport['city'].lower() == city_name.lower():
            return iata_code
    return None

def get_date(dstr):
    date = parse(dstr)
    return date.strftime("%Y-%m-%d")

def get_flight(ori, dest, date):
    _originLocationCode = find_iata_code(ori)
    _destinationLocationCode = find_iata_code(dest)
    _departureDate = get_date(date)
    print(_originLocationCode, _destinationLocationCode, _departureDate)
    try: 
        response = amadeus.shopping.flight_offers_search.get(
            originLocationCode=_originLocationCode,
            destinationLocationCode=_destinationLocationCode,
            departureDate=_departureDate,
            adults=1
        )
        print(f"response get, with size {len(response.data)}")
        flights = []
        query_result = []
        for flight in response.data[:5]:
            departure = flight['itineraries'][0]['segments'][0]['departure']['iataCode']
            arrival = flight['itineraries'][0]['segments'][-1]['arrival']['iataCode']
            price = flight['price']['total']
            carrier_code = flight['itineraries'][0]['segments'][0]['carrierCode']
            flight_number = flight['itineraries'][0]['segments'][0]['number']
            departure_time = flight['itineraries'][0]['segments'][0]['departure']['at']
            arrival_time = flight['itineraries'][0]['segments'][-1]['arrival']['at']
            flight_info = {'departure': departure, 'arrival': arrival, 'price': price, 'departure_time': departure_time, 'arrival_time': arrival_time}
            flights.append(flight_info)
            flight_id = carrier_code + ' ' + flight_number
            res = flight_id + '\n' \
                + 'Departure:'+ departure + '\n' \
                + 'Arrival:'+ arrival + '\n' \
                + 'Price:'+ price + '\n' \
                + 'Departure_time:' + departure_time + '\n' \
                + 'Arrival_time:' + arrival_time + '\n' \
                + '--------------------------------------\n'
            query_result.append(res)
        return query_result

    except ResponseError as error:
        print(error)

def main():
    ori = sys.argv[1]
    dest = sys.argv[2]
    date = sys.argv[3]
    get_flight(ori, dest, date)

if __name__ == "__main__":
    main()

