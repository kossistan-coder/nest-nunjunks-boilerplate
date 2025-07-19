import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class FlashMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    res.locals.toast = {
      message: req.flash('message'),
      type: req.flash('type'),
    };

    console.log('Res locals : ', res.locals.toast);

    next();
  }
}
