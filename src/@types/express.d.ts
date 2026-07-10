import 'express';
import { AccessTokenPayload } from '../auth/types/token.type';

declare module 'express' {
  interface Request {
    user?: AccessTokenPayload;
  }
}
