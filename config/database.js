
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
                host: env('DATABASE_HOST', 'localhost'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'strapi'),
                username: env('DATABASE_USERNAME', 'strapi'),
                password: env('DATABASE_PASSWORD', 'strapi'),
            },
            options: {
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
});
