/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as nunjucks from 'nunjucks';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

import session from 'express-session';
import flash from 'connect-flash';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ia Challenge')
    .setDescription('The Ia Challenge API description')
    .setVersion('1.0')
    .addTag('Ia Challenge')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, documentFactory);
  // somewhere in your initialization file
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(flash());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  const env = nunjucks.configure(join(__dirname, '..', 'views'), {
    autoescape: true,
    express: app,
    watch: true,
  });

  // env.addGlobal('can', (user: any, role: string) => {
  //   if (!user || !user.roles) return false;
  //   return user?.roles.some(
  //     (userRole: Record<string, any>) => userRole.designation === role,
  //   );
  // });

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('njk'); // Extension des fichiers templates
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
