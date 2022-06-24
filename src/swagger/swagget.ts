export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Conecta turismo',
        termsOfService: '',
    },
    servers: [
        {
            url: 'http://localhost:8080/',
            description: 'Get result between dates'
        },
        {
            url: 'https://localhost:8080/api-docs',
            description: 'Get Swagger info'
        },
    ],
}