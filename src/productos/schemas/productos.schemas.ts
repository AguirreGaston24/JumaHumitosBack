import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Define el tipo de documento de Mongoose basado en la clase Productos
export type ProductosDocument = HydratedDocument<Productos>;

@Schema({
  timestamps: true,  // Añade campos de creación y actualización automáticos
})
export class Productos {
  @Prop({ unique: true, trim: true, required: true })
  code: number;  // Código único del producto, obligatorio y de tipo número

  @Prop({ trim: true })
  type?: string;  // Tipo de producto (opcional), se recortan espacios en blanco al inicio y final

  @Prop({ default: '' }) 
  description?: string;  // Descripción del producto (opcional), valor por defecto es una cadena vacía

  @Prop({ default: '' }) 
  duration?: string;  // Duración del producto (opcional), valor por defecto es una cadena vacía

  @Prop({ default: 0 }) 
  amount?: number;  // Cantidad del producto (opcional), valor por defecto es 0

  @Prop({ default: '' }) 
  brand?: string;  // Marca del producto (opcional), valor por defecto es una cadena vacía

  @Prop({ default: '' }) 
  line?: string;  // Línea del producto (opcional), valor por defecto es una cadena vacía

  @Prop({ default: '' }) 
  scent?: string;  // Aroma del producto (opcional), valor por defecto es una cadena vacía

  @Prop({ default: true }) 
  stock?: boolean;  // Indica si el producto está en stock (opcional), valor por defecto es `true`

  @Prop({ default: 0 }) 
  price?: number;  // Precio del producto (opcional), valor por defecto es 0

  @Prop({ default: false }) 
  sold?: boolean;  // Indica si el producto ha sido vendido (opcional), valor por defecto es `false`

  @Prop({ default: 0 }) 
  salesCount: number;  // Cuenta de ventas del producto, valor por defecto es 0

  @Prop({ default: 0 }) 
  available: number;  // Cantidad disponible del producto, valor por defecto es 0
}

// Crea el esquema de Mongoose a partir de la clase Productos
export const productosSchema = SchemaFactory.createForClass(Productos);