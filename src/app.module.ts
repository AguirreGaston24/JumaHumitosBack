import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductosModule,
    MongooseModule.forRoot('mongodb+srv://aguirregastona:OndyXslqvgCBUZXg@jumahumitos.zrvbafq.mongodb.net/?retryWrites=true&w=majority&appName=JumaHumitos'),
  ],
})
export class AppModule {}
