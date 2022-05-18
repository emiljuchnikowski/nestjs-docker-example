import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.PREFIX) app.setGlobalPrefix(process.env.PREFIX);

  await app.listen(process.env.PORT ? process.env.PORT : 3000);
}
bootstrap().then();
