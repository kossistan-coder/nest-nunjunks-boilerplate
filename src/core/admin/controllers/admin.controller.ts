/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, Req, Res } from '@nestjs/common';

@Controller('settings')
export class AdminController {
  constructor() {}

  @Get('index')
  @Render('pages/workspace-admin/admins')
  async index(@Req() req: any, @Res() res: any) {
    return {};
  }
}
