import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductosDocument = HydratedDocument<Productos>;

@Schema({
  timestamps: true,
})
export class Productos {
  @Prop({ unique: true, trim: true, required: true })
  code: Number; // Si debe ser número

  @Prop({ trim: true })
  type: string;

  @Prop({ default: false }) 
  description: string;

  @Prop({ default: false }) 
  duration: string;

  @Prop({ default: false }) 
  amount: Number;

  @Prop({ default: false }) 
  brand: string;

  @Prop({ default: false }) 
  line: string;

  @Prop({ default: false }) 
  scent: string;

  @Prop({ default: false }) 
  stock: boolean;
}

export const productosSchema = SchemaFactory.createForClass(Productos);