import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../repositories/admin.repository';
import { CreateAdminDto } from '../../../../core/access-control/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../../../core/access-control/dtos/admin/update-admin.dto';
import * as bcrypt from 'bcrypt';
import { Admin } from '../models/admin.model';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async tryAuthentication(createAdminDto: CreateAdminDto) {
    const { email, password } = createAdminDto;
    const admin = await this.adminRepository.getAdmin<Admin>({
      email: email,
      password: password,
    });

    if (!admin) {
    }

    const hash = await bcrypt.compare(password, admin.password);
    delete admin.password;

    console.log('admin object ', admin);

    if (!hash) {
      return null;
    }
    return admin;
  }
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
