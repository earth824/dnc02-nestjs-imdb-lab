import { PickType } from '@nestjs/swagger';
import { RegisterDto } from '../../auth/dtos/register.dto';

export class CreateAdminDto extends PickType(RegisterDto, [
  'email',
  'password'
] as const) {}
