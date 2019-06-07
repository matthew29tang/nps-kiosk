# National Park Online Kiosk

This project was created for the National Park MindSumo project. More details can be found [here](https://www.mindsumo.com/contests/national-park-api). The goal was to provide a clean, sleek interface for the user to access information about national parks. 

## Features
* Search by state (with autocomplete, full list of states)
* Search by park name (with autocomplete, full list of parks) [Uses custom backend server]
* Park information
* Nearby visitor centers and campgrounds
* Articles/events/news
* Educational resources about the park. 

## Technologies used
* Frontend: ReactJS
    * Theme: Material UI
    * Deployment: Github pages
* Backend: NodeJS
    * Deployment: Heroku (nps-kiosk-server.herokuapp.com)
    
I created a backend server which provides a smaller JSON payload to reduce park listing delays.

## Backend Endpoints
Server accepts only GET requests.

### parks
Returns a list of parks in a state
###### Endpoint
```
http://nps-kiosk-server.herokuapp.com/parks?stateCode={stateCode}
```
###### Parameters
- **<code>string</code> stateCode** — 2 letter state abbreviation

###### Return Format
- **<code>JSON</code> data** — See example below.

###### Example Result
```
{
  "data": [
    {
      "description": "Alcatraz Island offers a close-up look at the site of the first lighthouse and US built fort on the West Coast, the infamous federal penitentiary long off-limits to the public, and the history making 18 month occupation by Indians of All Tribes. Rich in history, there is also a natural side to the Rock—gardens, tide pools, bird colonies, and bay views beyond compare.",
      "parkCode": "alca",
      "fullName": "Alcatraz Island",
      "stateCode": "CA"
    },
    {
      "description": "Climbing out of his boat and onto shore in 1542, Juan Rodriguez Cabrillo stepped into history as the first European to set foot on what is now the West Coast of the United States. In addition to telling the story of 16th century exploration, the park is home to a wealth of cultural and natural resources. Join us and embark on your own Voyage of Discovery.",
      "parkCode": "cabr",
      "fullName": "Cabrillo National Monument",
      "stateCode": "CA"
    }]}
```

---

### allParks
Returns a list of all parks, total
###### Endpoint
```
http://nps-kiosk-server.herokuapp.com/allParks
```
###### Parameters
- **None**

###### Return Format
- **<code>Array</code> data** — See example below.

###### Example Result
```
[
  {
    "label": "Captain John Smith Chesapeake National Historic Trail (DE)",
    "value": "cajo"
  },
  {
    "label": "Chesapeake Bay (DE)",
    "value": "cbpo"
  }]
```