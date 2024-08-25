import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Productos, productosSchema } from 'src/productos/schemas/productos.schemas';

@Module({
  imports: [
    // Configura Mongoose para conectar con la base de datos y definir el esquema de la colección de productos
    MongooseModule.forFeature([{ name: Productos.name, schema: productosSchema }]),
  ],
  // Define los controladores que gestionarán las solicitudes HTTP para este módulo
  controllers: [ProductosController],
  // Define los servicios que proporcionarán la lógica de negocio para este módulo
  providers: [ProductosService],
})
export class ProductosModule {}