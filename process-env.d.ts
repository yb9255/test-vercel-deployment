declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URL: string;
      mongodbUrl: string;
    }
  }
}

export {};
