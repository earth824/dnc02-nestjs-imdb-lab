import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateAdminDto } from './dtos/create-admin.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../database/generated/prisma/enums';

@Controller('users')
export class UserController {
  @Roles(Role.SUPER_ADMIN)
  @Post('admin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    console.log(createAdminDto);
  }

  @Patch('me')
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto);
  }

  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Patch(':id/disable')
  disableUser() {}

  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @Patch(':id/enable')
  enableUser() {}
}
