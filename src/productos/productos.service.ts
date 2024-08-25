import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductosDto } from 'src/productos/dto/CreateProductos.dto';
import { UpdateProductosDto } from 'src/productos/dto/UpdateProductosDto';
import { Productos, ProductosDocument } from 'src/productos/schemas/productos.schemas';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Productos.name) private productosModel: Model<ProductosDocument>,
  ) {}

  // Método para crear un nuevo producto
  async create(createProductosDto: CreateProductosDto): Promise<Productos> {
    // Crea una instancia del modelo con los datos proporcionados
    const createdProducto = new this.productosModel(createProductosDto);
    // Guarda el producto en la base de datos y retorna el documento creado
    return createdProducto.save();
  }

  // Método para obtener todos los productos
  async findAll(): Promise<Productos[]> {
    // Retorna todos los productos en la base de datos
    return this.productosModel.find().exec();
  }

  // Método para obtener un producto por su código
  async findOne(code: number): Promise<Productos> {
    // Busca el producto por su código y retorna el documento encontrado
    return this.productosModel.findOne({ code }).exec();
  }

  // Método para eliminar un producto por su código
  async delete(code: number): Promise<Productos> {
    // Busca y elimina el producto por su código, luego retorna el documento eliminado
    return this.productosModel.findOneAndDelete({ code }).exec();
  }

  // Método para actualizar un producto por su código
  async update(code: number, updateData: UpdateProductosDto): Promise<Productos | null> {
    // Busca el producto por su código
    const product = await this.productosModel.findOne({ code });

    // Lanza una excepción si el producto no existe
    if (!product) throw new NotFoundException('El producto no existe');

    // Actualiza el producto con los datos proporcionados
    product.set(updateData);

    // Guarda los cambios en la base de datos y retorna el documento actualizado
    return product.save();
  }

  // Método para incrementar el contador de ventas de un producto
  async incrementSalesCount(code: number): Promise<Productos | null> {
    // Busca el producto por su código
    const product = await this.productosModel.findOne({ code });

    // Lanza una excepción si el producto no existe
    if (!product) throw new NotFoundException('El producto no existe');

    // Verifica que haya suficiente inventario disponible
    if (product.available <= 0) throw new ConflictException('No hay inventario disponible');

    // Incrementa el contador de ventas y decrementa la cantidad disponible
    product.salesCount = (product.salesCount || 0) + 1;
    product.available -= 1;

    // Guarda los cambios en la base de datos y retorna el documento actualizado
    return product.save();
  }
}