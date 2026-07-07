import {
  IsAlphanumeric,
  IsDate,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxDate,
  MinLength
} from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';
import { Type } from 'class-transformer';

// enum Gender {
//   MALE = 'MALE',
//   FEMALE = 'FEMALE'
// }

export class RegisterDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @MinLength(6)
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @MaxDate(new Date())
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  dob?: Date;

  @IsIn(['MALE', 'FEMALE'])
  @IsOptional()
  gender?: 'MALE' | 'FEMALE';

  // @IsEnum(Gender)
  // @IsOptional()
  // gender?: Gender;
}
