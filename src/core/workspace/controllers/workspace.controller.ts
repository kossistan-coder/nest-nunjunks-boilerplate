/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, Req, Res } from '@nestjs/common';

@Controller('workspace')
export class WorkspaceController {
  @Get('dashboard/index')
  @Render('pages/workspace-admin/dashboard')
  async index(@Req() req: any, @Res() res: any) {
    return {};
  }
}
