# readme.md

# urls for the live demo

[https://rideshare-finder.vercel.app/](https://rideshare-finder.vercel.app/)

[https://rideshare-1as1.onrender.com](https://rideshare-1as1.onrender.com/)

[https://rideshare-finder.netlify.app/](https://rideshare-finder.netlify.app/)

## About

This website allows the user to select a point on the map where they would like to go (like uber), with the first point being their latitude/longitude location (this is why it is sometimes inaccurate). It then shows the router and the distance + expected length of journey (again like uber). The user enters their details (the name is not actually saved) and their car reg. This is used to find out what car they have and gets the L/km fuel rate. This then calculates the fuel saved and the price of the fuel saved. It then grabs a fake person and a nearby address - this forms the profile of the person they are ridesharing with.

## Tech Stack

### Frontend

- [Vue](http://vuejs.org)
- [https://tailwindcss.com/](https://tailwindcss.com/) + [https://tailwindui.com/](https://tailwindui.com/)
- [Bootstrap](https://getbootstrap.com/) (in places)
- [js-confetti](https://www.npmjs.com/package/js-confetti)

### External resources

- APIs - accessed with [axios-http](https://axios-http.com/)
    
    [mapbox](http://mapbox.com)  (map + directions)
    
    [abstract](https://www.abstractapi.com/) (geolocation)
    
    [randomuser.me](http://randomuser.me) (fake data)
    
    [ukvehicledata.co.uk](http://ukvehicledata.co.uk) (car/fuel lookup)
    
- Hosting
    
    Source code hosted at https://github.com/PaddyCooper08/rideshare
    
    built with [vite](http://vitejs.dev)
    
    Live demo hosted by [vercel](https://vercel.com/dashboard), [render](https://render.com/) and [netlify](https://www.netlify.com/)
    

## Credits:

Logo, various graphics and general site layout created by Aidan Grieve.

Code, deployment and all that pizazz by [Paddy Cooper](http://github.com/paddycooper08)

Various people on [stackoverflow](http://stackoverflow.com) who told me how to do silly javascript things

Thanks to all the people who created the documentation for all the above technologies.
