module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.PORT || 1337,
  app: {
    keys: env.array('APP_KEYS' , ['myKeyA', 'myKeyB']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  afterStart: () => {
    console.log(`Server running on port ${process.env.PORT || 1337}`);
  }
});


