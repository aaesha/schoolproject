module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET' , 'EzZFzzfy2bOoJ1etFwyVmw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','DZLJ2EIB8BGt4IatDqpg+A=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT' ),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
