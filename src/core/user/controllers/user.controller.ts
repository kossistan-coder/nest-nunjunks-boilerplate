/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Render, Get, Req, Res } from '@nestjs/common';

import { UserService } from 'src/core/user/services/user.service';

@Controller('user')
export default class UserController {
  constructor(
    private readonly userService: UserService, // Replace 'any' with the actual type of userService
  ) {
    // Constructor logic if needed
  }

  @Get('all')
  @Render('pages/workspace-admin/users')
  async index(@Req() req: any, @Res() res: any) {
    return {};
  }
}
