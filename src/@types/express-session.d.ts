import 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}
