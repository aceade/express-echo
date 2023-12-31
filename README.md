# express-echo
A quick ExpressJS application that echoes a HTTP request back to the sender. The intended goal is to help some of my frontend practice projects by giving me a dedicated endpoint hosted in Azure for mock REST calls.

**This has since been removed from Azure and replaced with Azure Functions**

## Endpoints
Each endpoint takes a wildcard path. Each simply returns the JSON that it received, without processing it.

### Mock GET

- **URL**: `GET https://aceade-express-echo.azurewebsites.net/*`
- **Body**: arbitary JSON
- **Response body**: arbitrary JSON (as sent)

### Mock POST

- **URL**: `POST https://aceade-express-echo.azurewebsites.net/*`
- **Body**: arbitary JSON
- **Response status**: 201 Created
- **Response body**: arbitrary JSON (as sent)

### Mock PUT

- **URL**: `PUT https://aceade-express-echo.azurewebsites.net/*`
- **Body**: arbitary JSON
- **Response status**: 202 Accepted
- **Response body**: arbitrary JSON (as sent)

### Mock DELETE

- **URL**: `DELETE https://aceade-express-echo.azurewebsites.net/*`
- **Body**: arbitary JSON
- **Response status**: 202 Accepted
- **Response on OK**: arbitrary JSON (as sent)

## Running locally

I used [pnpm](https://pnpm.io/) instead of npm, but the commands are equivalent (`pnpm install` and `pnpm run dev` instead of `npm install` and `npm run dev`). 

- `pnpm install`
- `pnpm run dev`
- 
Once the service is running, issue a GET, POST or PUT request with a JSON body to any path you like, and the body should be echoed back to you.

## Licence

This is under the MIT licence.
