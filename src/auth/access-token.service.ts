import { Injectable } from '@nestjs/common';
import { AccessTokenPayload } from './types/token.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccessTokenService {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: AccessTokenPayload): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
