import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post
} from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log(loginDto);
  }

  @Get('me')
  getMe() {}

  @Patch('me/password')
  updatePassword(@Body() updatePasswordDto: UpdatePasswordDto) {
    console.log(updatePasswordDto);
  }
}
