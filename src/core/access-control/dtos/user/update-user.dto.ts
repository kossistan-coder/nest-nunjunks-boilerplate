import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from '../admin/create-admin.dto';

export class UpdateUserDto extends PartialType(CreateAdminDto) {}
