export default {
  STRIPE_KEY: "pk_test_f9UvMgYb8xShkKi22G2qHTxF00QNc9C4TS",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-uploads-eifr"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://nn5lbol7ah.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_3C4dJsvAa",
    APP_CLIENT_ID: "6p7j2s3opgmadjlvdrb9cplc4m",
    IDENTITY_POOL_ID: "eu-central-1:141b5073-ba1b-4433-9e31-1a5b966984d6"
  }
};
