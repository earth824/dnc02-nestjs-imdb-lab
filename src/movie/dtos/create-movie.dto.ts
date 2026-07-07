import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min
} from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';
import { Genre } from '../constants/genre.constant';
import { Type } from 'class-transformer';

export class CreateMovieDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Max(2100)
  @Min(1900)
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  releaseYear?: number;

  @IsIn(['G', 'PG', 'PG-13', 'R', 'NC-17'])
  @IsOptional()
  contentRating?: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';

  @IsPositive()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  length?: number;

  @IsArray()
  @IsIn(Object.values(Genre), { each: true })
  @IsOptional()
  genres: Genre[];

  @Trim()
  @IsString()
  @IsOptional()
  outline?: string;
}
