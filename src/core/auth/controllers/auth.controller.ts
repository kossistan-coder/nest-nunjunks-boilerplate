/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateAdminDto } from 'src/core/access-control/dtos/admin/create-admin.dto';
import { AdminService } from 'src/libs/admin-access-control/infrastructure/services/admin.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly adminService: AdminService) {}

  @Get('login')
  @Render('pages/workspace-admin/auth/login')
  async getLoginPage(@Req() req: Request, @Res() res: Response) {
    return {};
  }

  @Post('login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body(new ValidationPipe()) createAdminDto: CreateAdminDto,
  ) {
    try {
    } catch (error) {}
  }
}
