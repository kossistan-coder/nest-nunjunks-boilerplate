/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { EventService } from 'src/libs/events/domain/services/event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

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
