import { environment as localEnvironment } from "./environment.local";
export const environment = {
  production: false,
  ...localEnvironment
};
