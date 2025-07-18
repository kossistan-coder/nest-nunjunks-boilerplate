import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRoleDto {
  @IsString()
  designation: string;

  @IsString()
  description: string;

  @IsArray()
  @IsOptional()
  @ArrayUnique({ message: 'Duplicate permissions are not allowed.' })
  @ArrayNotEmpty({ message: 'The permissions array should not be empty.' })
  @IsMongoId({
    each: true,
    message: 'Each permission must be a valid ObjectId.',
  })
  permissions: string[];
}
