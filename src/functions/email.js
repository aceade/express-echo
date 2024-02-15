const { app } = require('@azure/functions');

app.http('email', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const reqBody = request.body;
        context.log(`Http function processed request with body "${reqBody}"`);


        return { body: reqBody };
    }
});
