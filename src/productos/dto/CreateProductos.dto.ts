import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProductosDto {
  // Validación para asegurarse de que el código es un número y no está vacío
  @IsNumber()
  @IsNotEmpty()
  code: Number;

  // Validación opcional para el tipo de producto, asegurando que es una cadena de texto
  @IsString()
  @IsOptional()
  type?: string;

  // Validación opcional para el stock, asegurando que es un booleano
  @IsBoolean()
  @IsOptional()
  stock?: boolean;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  duration: Number;

  @IsString()
  @IsOptional()
  amount: string;


  @IsString()
  @IsOptional()
  brand: string;


  @IsString()
  @IsOptional()
  line: string;

  @IsString()
  @IsOptional()
  scent: string;
}
