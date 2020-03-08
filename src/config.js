const dev = {
  STRIPE_KEY: "pk_test_f9UvMgYb8xShkKi22G2qHTxF00QNc9C4TS",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-vqpa0y4mlw7u"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://api.eifr.net/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_m1UVu01G3",
    APP_CLIENT_ID: "50m5qj6ueati2u0fm7d93p771t",
    IDENTITY_POOL_ID: "eu-central-1:2fc9c28b-52dd-444e-b1e0-114d571493f3"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_f9UvMgYb8xShkKi22G2qHTxF00QNc9C4TS",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-9dy6fxkxv0xm"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://api.eifr.net/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_2Z7mUAayx",
    APP_CLIENT_ID: "4td6eol90u1ckgmv7ecpq3fhs1",
    IDENTITY_POOL_ID: "eu-central-1:f281656d-40ca-42be-97f4-38b98253f756"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
