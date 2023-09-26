# express-echo
A quick ExpressJS application that echoes a HTTP request back to the sender. The intended goal is to help some of my frontend practice projects by giving me a dedicated endpoint for mock REST calls.

## Using it

I used [pnpm](https://pnpm.io/) instead of npm, but the commands are equivalent (`pnpm install` and `pnpm run dev` instead of `npm install` and `npm run dev`). Once the service is running, issue a GET, POST or PUT request with a JSON body to any path you like, and the body should be echoed back to you.

## Licence

This is under the MIT licence.