import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { EnvVariable } from '../../config/env.validate';

@Module({
  imports: [
    NestJwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvVariable, true>) => ({
        secret: configService.get('ACCESS_TOKEN_SECRET', { infer: true }),
        signOptions: {
          expiresIn: configService.get('ACCESS_TOKEN_EXPIRES_IN', {
            infer: true
          })
        }
      })
    })
  ],
  exports: [NestJwtModule]
})
export class JwtModule {}
