# express-echo

A quick Azure Function that echoes a HTTP request back to the sender. The intended goal is to help some of my frontend practice projects by giving me a dedicated endpoint hosted in Azure for mock REST calls.

This originally started as a NodeJS/Express app deployed to Azure, but this sort of thing is better suited to serverless computing.

## Endpoints

### /email

- **URL**: `POST https://aceade-express-echo.azurewebsites.net/api/email`
- **Body**: arbitary JSON
- **Response status**: 201 Created
- **Response body**: arbitrary JSON (as sent)

## Licence

This is under the MIT licence.
