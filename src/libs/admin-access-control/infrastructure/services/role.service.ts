import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../repositories/role.repository';
import { CreateRoleDto } from '../../../../core/access-control/dtos/role/create-role.dto';
import { UpdateRoleDto } from '../../../../core/access-control/dtos/role/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async getAll() {
    return await this.roleRepository.getRole({ active: true });
  }

  async create(dto: CreateRoleDto) {
    const created = await this.roleRepository.createRole(dto, {
      ordered: false,
    });

    return created;
  }

  async update(id: string, dto: UpdateRoleDto) {
    const update = {
      _id: id,
      ...dto,
    };
    const updated = await this.roleRepository.updateRole(update);

    return updated;
  }

  async delete(id: string) {
    return await this.roleRepository.deleteOne({ _id: id });
  }
}
