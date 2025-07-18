import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../repositories/admin.repository';
import { CreateAdminDto } from '../../../../core/access-control/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../../../core/access-control/dtos/admin/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async getAll(active: boolean) {
    try {
      return await this.adminRepository.getAdmin({
        active: active,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async create(createAdminDto: CreateAdminDto) {
    try {
      const created = await this.adminRepository.createAdmin(createAdminDto, {
        ordered: false,
      });

      return created;
    } catch (error) {
      console.error(error);
    }
  }

  async update(
    id: string,

    updateAdminDto: UpdateAdminDto,
  ) {
    try {
      const updateQuery = {
        _id: id,
        ...updateAdminDto,
      };
      const updated = await this.adminRepository.updateAdmin(updateQuery, {
        new: true,
      });

      return updated;
    } catch (error) {
      console.error(error);
    }
  }
}
