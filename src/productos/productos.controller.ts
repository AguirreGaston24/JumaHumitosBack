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
    Put
  } from '@nestjs/common';
  import { ProductosService } from './productos.service';
  import { CreateProductosDto } from 'src/productos/dto/CreateProductos.dto';
  import { UpdateProductosDto } from 'src/productos/dto/UpdateProductosDto';
  
  @Controller('productos')
  export class ProductosController {
    constructor(private productosService: ProductosService) {}
  
    // Obtener todos los productos
    @Get()
    async findAll() {
      return this.productosService.findAll();
    }
  
    // Crear un nuevo producto
    @Post()
    async create(@Body() body: CreateProductosDto) {
      try {
        return await this.productosService.create(body);
      } catch (error) {
        if (error.code === 11000) { // Código de error para duplicados en MongoDB
          throw new ConflictException('Este producto ya existe');
        }
        throw error;
      }
    }
  
    // Obtener un producto por su código
    @Get(':code')
    async findOne(@Param('code') code: number) {
      const producto = await this.productosService.findOne(code);
      if (!producto) throw new NotFoundException('Este producto no existe');
      return producto;
    }
  
    // Eliminar un producto por su código
    @Delete(':code')
    @HttpCode(204)
    async delete(@Param('code') code: number) {
      const producto = await this.productosService.delete(code);
      if (!producto) throw new NotFoundException('El producto no existe');
      return producto;
    }
  
    // Actualizar un producto por su código
    @Put(':code')
    async update(@Param('code') code: number, @Body() body: UpdateProductosDto) {
      const producto = await this.productosService.update(code, body);
      if (!producto) throw new NotFoundException('El producto no existe');
      return producto;
    }
  }