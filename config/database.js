module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME'),
                username: env('DATABASE_USERNAME'),
                password: env('DATABASE_PASSWORD'),
            },
            options: {
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
});

// console.log('Client:', 'postgres');
// console.log('Host:', 'aws-0-ap-south-1.pooler.supabase.com');
// console.log('Port:', 5432);
// console.log('Database:', 'postgres');
// console.log('Username:', 'postgres.mifojjzyauienvblcvwc');
// console.log('Password:', 'ainmnin@school2015');
// console.log('SSL:', true);


