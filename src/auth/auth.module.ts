import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { HashModule } from '../infrastructure/hash/hash.module';
import { JwtModule } from '../infrastructure/jwt/jwt.module';
import { AccessTokenService } from './access-token.service';

@Module({
  imports: [UserModule, HashModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenService]
})
export class AuthModule {}
