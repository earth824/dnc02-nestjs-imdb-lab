import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validate';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MovieModule,
    ReviewModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate
    }),
    DatabaseModule
  ]
})
export class AppModule {}
