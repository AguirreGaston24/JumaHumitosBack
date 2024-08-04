import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Productos, productosSchema } from 'src/productos/schemas/productos.schemas';

@Module({
  imports: [
    // Configuración de Mongoose para la colección de productos
    MongooseModule.forFeature([{ name: Productos.name, schema: productosSchema }]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}