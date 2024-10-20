
// module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//         default: {
//             connector: 'bookshelf',
//             settings: {
//                 client: 'postgres',
//                 host: env('DATABASE_HOST'),
//                 port: env.int('DATABASE_PORT', 5432),
//                 database: env('DATABASE_NAME'),
//                 username: env('DATABASE_USERNAME'),
//                 password: env('DATABASE_PASSWORD'),
//                 ssl: {
//                     rejectUnauthorized: false
//                 }
//             },
//             options: {
//                 ssl: env.bool('DATABASE_SSL', true),
//             },
//         },
//     },
// });

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST', 'aws-0-ap-south-1.pooler.supabase.com'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'postgres'),
                username: env('DATABASE_USERNAME', 'postgres.mifojjzyauienvblcvwc'),
                password: env('DATABASE_PASSWORD', 'ainmnin@school2015'),
            },
            options: {
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
});
