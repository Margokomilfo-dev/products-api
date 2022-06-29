export type EnvironmentVariable = { [key: string]: string | undefined };

export type EnvironmentsTypes =
  | 'DEVELOPMENT'
  | 'STAGING'
  | 'PRODUCTION'
  | 'TESTS';

export class EnvironmentSettings {
  constructor(private env: EnvironmentsTypes) {}

  getEnv() {
    return this.env;
  }

  isProduction() {
    return this.env === 'PRODUCTION';
  }

  isStaging() {
    return this.env === 'STAGING';
  }

  isDevelopment() {
    return this.env === 'DEVELOPMENT';
  }
  isTesting() {
    return this.env === 'TESTS';
  }
}

class APISettings {
  public readonly MONGO_URL: string;

  constructor(private envVariables: EnvironmentVariable) {
    this.MONGO_URL =
      envVariables.MONGODB_CONNECTION_STRING ||
      'mongodb+srv://admin:admin@products.flotctu.mongodb.net/?retryWrites=true&w=majority';
  }
}

class AppSettings {
  constructor(public env: EnvironmentSettings, public api: APISettings) {}
}
const env = new EnvironmentSettings(
  (process.env.ENV || 'DEVELOPMENT') as EnvironmentsTypes,
);
const api = new APISettings(process.env);

export const appSettings = new AppSettings(env, api);
