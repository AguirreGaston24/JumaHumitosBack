// update-productos.dto.ts
import { IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateProductosDto {
  // Campo opcional para contar ventas, debe ser un número
  @IsOptional()
  @IsNumber()
  salesCount?: number;  // Usa 'number' en lugar de 'Number'

  // Campo opcional para el tipo de producto, debe ser una cadena de texto
  @IsOptional()
  @IsString()
  type?: string;  // Opcional y debe ser una cadena de texto

  // Campo opcional para la marca del producto, debe ser una cadena de texto
  @IsOptional()
  @IsString()
  brand?: string;  // Opcional y debe ser una cadena de texto

  // Campo opcional para la línea del producto, debe ser una cadena de texto
  @IsOptional()
  @IsString()
  line?: string;  // Opcional y debe ser una cadena de texto

  // Campo opcional para el aroma del producto, debe ser una cadena de texto
  @IsOptional()
  @IsString()
  scent?: string;  // Opcional y debe ser una cadena de texto

  // Campo opcional para el estado del stock, debe ser un booleano
  @IsOptional()
  @IsBoolean()
  stock?: boolean;  // Opcional y debe ser un booleano

  // Campo opcional para el precio del producto, debe ser un número
  @IsOptional()
  @IsNumber()
  price?: number;  // Opcional y debe ser un número

  // Campo opcional para la cantidad disponible del producto, debe ser un número
  @IsOptional()
  @IsNumber()
  available?: number;  // Opcional y debe ser un número
}