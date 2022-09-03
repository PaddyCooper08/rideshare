# readme.md

## [Live demo](https://rideshare-finder.vercel.app/)

## About
#### Other components:
[cors-anywhere proxy](https://infinite-eyrie-32849.herokuapp.com), code is [here](https://github.com/Rob--W/cors-anywhere) \
[my expressjs email server](https://github.com/PaddyCooper08/emailServer)

### A4 description doc for competition
                   
I’ve never been very good at algorithims and stuff so I took a different approach. I created an uber-style app where the user submits their name etc as well as their car reg. They then can find a location on the interactive map and click it. This calculates the distance and the time the journey would take – much like google maps. They then are presented with a fake person from an api (all things used and a more techy description of everything can be found in the readme.md on my github). They can then accept this person or reroll it. The app takes the users current location and finds a nearby postcode to be the address of the fake person so it’s believable. It also provided them with a fake email. At this point a confirmation email is sent to the contact email provided at the beginning. A request to the gov.uk VES lookup api is also sent to find the co2 emissions (g/km) of their car. This is passed through a proxy I host to avoid CORS errors. If the reg code is invalid, at this point the user is notified and sent back to the first page (all other error handling is done at the point the error occurs). This data is used to calculate how much co2 is saved by ridesharing and how many “tree days” this equates to. This is how many trees get a “day off” of removing carbon from the air because of this journey save – a tree removes ~58g of carbon per day. This is displayed in a graphical form. There is also a star rating system (this doesn’t actually do anything – it’s visual only). All frameworks, code snippets and packages are all accredited in the readme on my github. All code and tech stuff handled by Paddy Cooper, design and svg/graphic drawings by Aidan Grieve – both 3E.

In terms of how I tackled this problem; I took it step by step, building the app up around the map. I used all the Vue (my javascript framework) magic available to me and outsourced as much of the work – emails, co2 calculations, geolocation, mapwork and proxy code to various apis/open source projects.



## Tech Stack

### All imports/ npm dependencies
![image)](https://i.imgur.com/9iVJ1N4.png)
![image](https://i.imgur.com/cJvzPdT.png)




### Frontend

- [Vue](http://vuejs.org)
- [https://tailwindcss.com/](https://tailwindcss.com/) + [https://tailwindui.com/](https://tailwindui.com/)
- [Bootstrap](https://getbootstrap.com/) (in places)
- [Bootstrap icons](https://icons.getbootstrap.com/)
- [js-confetti](https://www.npmjs.com/package/js-confetti)

### External resources

##  APIs - accessed with [axios-http](https://axios-http.com/)
  - [mapbox](http://mapbox.com) (map + directions)
  - [abstract](https://www.abstractapi.com/) (geolocation)
  - [randomuser.me](http://randomuser.me) (fake data)
  - [gov.uk VES lookup](https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/vehicle-enquiry-service-description.html#vehicle-enquiry-service-api) (car/fuel lookup)
  [https://www.emailjs.com/](https://www.emailjs.com/) (for sending the confirmation emails)
## Hosting
  - Source code hosted at https://github.com/PaddyCooper08/rideshare
  - built with [vite](http://vitejs.dev)
  - Live demo hosted by [vercel](https://vercel.com/dashboard), [render](https://render.com/) and [netlify](https://www.netlify.com/)
  - My [cors-anywhere](https://github.com/Rob--W/cors-anywhere) proxy hosted by [heroku](https://www.heroku.com)

## Credits:

Logo, various graphics and general site layout created by [Aidan Grieve](mailto:1220@rgsg.co.uk).

Code, deployment and all that pizazz by [Paddy Cooper](http://github.com/paddycooper08)

Various people on [stackoverflow](http://stackoverflow.com) who told me how to do silly javascript things

Thanks to all the people who created the documentation for all the above technologies.
