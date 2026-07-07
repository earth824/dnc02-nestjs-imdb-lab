import { PickType } from '@nestjs/swagger';
import { RegisterDto } from './register.dto';

export class UpdatePasswordDto extends PickType(RegisterDto, [
  'password'
] as const) {}
