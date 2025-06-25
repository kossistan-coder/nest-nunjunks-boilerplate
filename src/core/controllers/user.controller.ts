/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Render, Get, Req, Res } from '@nestjs/common';

import { UserService } from 'src/core/services/user.service';

@Controller('ia-challenge')
export default class UserController {
  constructor(
    private readonly userService: UserService, // Replace 'any' with the actual type of userService
  ) {
    // Constructor logic if needed
  }

  @Get('user')
  @Render('pages/index')
  async index(@Req() req: any, @Res() res: any) {
    return {};
  }
}
