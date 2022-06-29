import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appSettings } from './settings/app-settings';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT || 4848;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api');

  if (!appSettings.env.isProduction()) {
    const examsConfig = new DocumentBuilder()
      .setTitle('product-api')
      .setDescription('Here will be description')
      .setVersion('1.0')
      .setBasePath('api')
      .build();
    const examsDocument = SwaggerModule.createDocument(app, examsConfig);
    SwaggerModule.setup('api', app, examsDocument);
  }

  await app.listen(PORT, () => {
    console.log('App listen port: ', PORT);
    console.log('App env: ', appSettings.env.getEnv());
  });
}

bootstrap();
