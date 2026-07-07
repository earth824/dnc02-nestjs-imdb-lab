import { OmitType, PartialType } from '@nestjs/swagger';
import { RegisterDto } from '../../auth/dtos/register.dto';

export class UpdateProfileDto extends PartialType(
  OmitType(RegisterDto, ['email', 'password'] as const)
) {}
