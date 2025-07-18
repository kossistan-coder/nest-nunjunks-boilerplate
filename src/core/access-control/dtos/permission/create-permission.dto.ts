import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { PermissionAction } from 'src/shared/constants/permissions';

export class CreatePermissionDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  designation: PermissionAction;

  @IsString()
  @Transform(({ value }) => value.replace(/\s+/g, ' '))
  description: string;

  @IsOptional()
  active: boolean;
}
