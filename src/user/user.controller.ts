import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateAdminDto } from './dtos/create-admin.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';

@Controller('users')
export class UserController {
  @Post('admin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    console.log(createAdminDto);
  }

  @Patch('me')
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto);
  }

  @Patch(':id/disable')
  disableUser() {}

  @Patch(':id/enable')
  enableUser() {}
}
