// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: process.env.PORT || 1337,
//   app: {
//     keys: env.array('APP_KEYS' , ['myKeyA', 'myKeyB']),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
//   afterStart: () => {
//     console.log(`Server running on port ${process.env.PORT || 1337}`);
//   }
// });
console.log(`Host: ${process.env.HOST}`);
console.log(`Port: ${process.env.PORT}`);
console.log(`Database Host: ${process.env.DATABASE_HOST}`);
console.log(`Database Port: ${process.env.DATABASE_PORT}`);
console.log(`Database Name: ${process.env.DATABASE_NAME}`);
console.log(`Database Username: ${process.env.DATABASE_USERNAME}`);
console.log(`Database Password: ${process.env.DATABASE_PASSWORD}`);



