import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateAdminDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password: string;

  @IsBoolean()
  active: boolean;

  @IsArray()
  @IsOptional()
  @ArrayUnique({ message: 'Duplicate roles are not allowed.' })
  @ArrayNotEmpty({ message: 'The roles array should not be empty.' })
  @IsMongoId({
    each: true,
    message: 'Each roles must be a valid ObjectId.',
  })
  roles: string[];
}
