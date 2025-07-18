/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Render,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAdminDto } from '../dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../dtos/admin/update-admin.dto';
import { AdminService } from 'src/libs/admin-access-control/infrastructure/services/admin.service';

@Controller('access-control')
export class AccessControlController {
  constructor(private adminService: AdminService) {}
  @Get('index')
  @Render('pages/workspace-admin/admins')
  async index(@Req() req: any, @Res() res: any) {
    return {};
  }

  @Get('/active/admin/all')
  async getAllActiveAdmins(
    @Param('active') active: 1 | 0,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const response = await this.adminService.getAll(
        active === 1 ? true : false,
      );
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/create/admin')
  async createAdmin(
    @Req() req: Request,
    @Res() res: Response,
    @Body(new ValidationPipe()) createAdminDto: CreateAdminDto,
  ) {
    try {
      const response = await this.adminService.create(createAdminDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/update/:id/admin')
  async updateAdmin(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
    @Body(new ValidationPipe()) updateAdminDto: UpdateAdminDto,
  ) {
    try {
      const response = await this.adminService.update(id, updateAdminDto);
    } catch (error) {
      console.error(error);
    }
  }
}
