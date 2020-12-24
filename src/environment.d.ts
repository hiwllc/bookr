declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV: "development" | "production";

      DB_MONGO_URI: string;
      DB_USER: string;
      DB_PASSWORD: string;
    }
  }
}

export {};
