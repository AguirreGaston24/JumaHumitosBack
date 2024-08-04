import { Injectable } from '@nestjs/common';
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

  async create(createProductosDto: CreateProductosDto): Promise<Productos> {
    const createdProducto = new this.productosModel(createProductosDto);
    return createdProducto.save();
  }

  async findAll(): Promise<Productos[]> {
    return this.productosModel.find().exec();
  }

  async findOne(code: Number): Promise<Productos> {
    return this.productosModel.findOne({ code }).exec();
  }

  async delete(code: Number): Promise<Productos> {
    return this.productosModel.findOneAndDelete({ code }).exec();
  }

  async update(code: Number, updateProductosDto: UpdateProductosDto): Promise<Productos> {
    return this.productosModel.findOneAndUpdate({ code }, updateProductosDto, { new: true }).exec();
  }
}