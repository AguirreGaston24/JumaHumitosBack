import {
  Body,
  ConflictException,
  NotFoundException,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductosDto } from 'src/productos/dto/CreateProductos.dto';
import { UpdateProductosDto } from 'src/productos/dto/UpdateProductosDto';

@Controller('productos')
export class ProductosController {
  // Inyección del servicio ProductosService en el controlador
  constructor(private productosService: ProductosService) {}

  // Obtener todos los productos
  @Get()
  async findAll() {
    // Llama al método findAll del servicio para obtener todos los productos
    return this.productosService.findAll();
  }

  // Crear un nuevo producto
  @Post()
  async create(@Body() body: CreateProductosDto) {
    try {
      // Llama al método create del servicio para agregar un nuevo producto
      return await this.productosService.create(body);
    } catch (error) {
      // Manejo del error de duplicado en MongoDB
      if (error.code === 11000) { // Código de error para duplicados
        throw new ConflictException('Este producto ya existe');
      }
      // Re-lanza el error si no es de duplicado
      throw error;
    }
  }

  // Vender un producto y aumentar el contador de ventas
  @Post(':code/sell')
  async sellProduct(@Param('code') code: number) {
    // Llama al método incrementSalesCount del servicio para incrementar el contador de ventas
    const producto = await this.productosService.incrementSalesCount(code);
    // Verifica si el producto existe
    if (!producto) throw new NotFoundException('El producto no existe');
    // Devuelve un mensaje confirmando la venta
    return { message: 'Producto vendido', product: producto };
  }

  // Obtener un producto por su código
  @Get(':code')
  async findOne(@Param('code') code: string) {
    // Convierte el código del producto a número
    const numericCode = Number(code);
    // Verifica si la conversión a número es válida
    if (isNaN(numericCode)) throw new BadRequestException('Formato de código inválido');
    
    // Llama al método findOne del servicio para obtener el producto por su código
    const producto = await this.productosService.findOne(numericCode);
    // Verifica si el producto existe
    if (!producto) throw new NotFoundException('Este producto no existe');
    // Devuelve el producto encontrado
    return producto;
  }

  // Eliminar un producto por su código
  @Delete(':code')
  @HttpCode(204) // Devuelve un código de estado HTTP 204 (No Content) si se elimina con éxito
  async delete(@Param('code') code: number) {
    // Llama al método delete del servicio para eliminar el producto por su código
    const producto = await this.productosService.delete(code);
    // Verifica si el producto existe
    if (!producto) throw new NotFoundException('El producto no existe');
    // Devuelve el producto eliminado
    return producto;
  }

  // Actualizar un producto por su código
  @Put(':code')
  async update(@Param('code') code: number, @Body() body: UpdateProductosDto) {
    // Llama al método update del servicio para actualizar el producto por su código
    const producto = await this.productosService.update(code, body);
    // Verifica si el producto existe
    if (!producto) throw new NotFoundException('El producto no existe');
    // Devuelve el producto actualizado
    return producto;
  }
}