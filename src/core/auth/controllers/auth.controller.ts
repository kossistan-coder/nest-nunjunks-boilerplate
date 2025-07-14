/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('login')
  @Render('pages/workspace-admin/auth/login')
  async getLoginPage(@Req() req: Request, @Res() res: Response) {
    return {};
  }
}
