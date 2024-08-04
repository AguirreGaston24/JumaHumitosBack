import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS para permitir múltiples orígenes
  app.enableCors({
    origin: ['https://jumahumitosfront.onrender.com', 'http://localhost:5173'], // Permitir orígenes locales y de producción
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true, // Si necesitas enviar cookies
  });

  await app.listen(3000);
  console.log('Backend server is running on http://localhost:3000');
}

bootstrap();