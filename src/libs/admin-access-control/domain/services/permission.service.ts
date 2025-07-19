import { CreatePermissionDto } from '../../../../core/access-control/dtos/permission/create-permission.dto';
import { Injectable } from '@nestjs/common';
import { PermissionRepositry } from '../../infrastructure/repositories/permission.repository';
import { UpdateAdminDto } from '../../../../core/access-control/dtos/admin/update-admin.dto';

@Injectable()
export class PermissionService {
  constructor(private readonly permissionRepository: PermissionRepositry) {}

  async getAll() {
    return await this.permissionRepository.getPermission({ active: true });
  }

  async create(dto: CreatePermissionDto) {
    const created = this.permissionRepository.createPermission(dto, {
      ordered: false,
    });

    return created;
  }

  async update(id: string, dto: UpdateAdminDto) {
    const update = {
      _id: id,
      ...dto,
    };
    const updated = await this.permissionRepository.updatePermission(update);

    return updated;
  }

  async delete(id: string) {
    return await this.permissionRepository.deleteOne({ _id: id });
  }
}
