module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_URL').split(':')[2],
                port: env('DATABASE_URL').split(':')[3].split('/')[0],
                database: env('DATABASE_URL').split('/')[2],
                username: env('DATABASE_USERNAME'),
                password: env('DATABASE_PASSWORD'),
            },
            options: {
                ssl: false,
            },
        },
    },
});
