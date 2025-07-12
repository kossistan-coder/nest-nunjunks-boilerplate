/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, Req, Res } from '@nestjs/common';

@Controller('event')
export class EventController {
  constructor() {}

  @Get('all')
  @Render('pages/workspace-admin/events')
  async index(@Req() req: any, @Res() res: any) {
    return {};
  }

  @Get('edition')
  @Render('pages/workspace-admin/event-edition')
  async getEditionPage(@Req() req: any, @Res() res: any) {
    return {};
  }
}
