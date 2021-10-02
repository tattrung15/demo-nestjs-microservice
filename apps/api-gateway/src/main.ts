import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReverseProxyMiddleware } from './middlewares/reverse-proxy.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(ReverseProxyMiddleware);
  app.listen(8080);
}
bootstrap();
