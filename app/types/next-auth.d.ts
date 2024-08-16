import { UserData } from '../lib/auth';

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: UserData;
  }
}
