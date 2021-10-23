import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { fastifyHelmet } from 'fastify-helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.register(fastifyHelmet, {
    /**
     * disable CSP for now - CSP has issues with GraphQL playground
     * see https://docs.nestjs.com/security/helmet for more info
     *  */ 
    contentSecurityPolicy: false,
  });
  await app.listen(8080);
}
bootstrap();