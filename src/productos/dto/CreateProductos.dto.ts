import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProductosDto {
  // Valida que 'code' sea un número y no esté vacío
  @IsNumber()
  @IsNotEmpty()
  code: number;  // Usa 'number' en lugar de 'Number' para una mejor coherencia en TypeScript

  // Valida que 'type' sea una cadena de texto opcional
  @IsString()
  @IsOptional()
  type?: string;  // El signo de interrogación indica que este campo es opcional

  // Valida que 'stock' sea un valor booleano opcional
  @IsBoolean()
  @IsOptional()
  stock?: boolean;  // También opcional y de tipo booleano

  // Valida que 'description' sea una cadena de texto opcional
  @IsString()
  @IsOptional()
  description?: string;  // Añadir signo de interrogación para marcarlo como opcional

  // Valida que 'duration' sea un número y no esté vacío
  @IsNumber()
  @IsNotEmpty()
  duration: number;  // Usa 'number' en lugar de 'Number'

  // Valida que 'amount' sea una cadena de texto opcional
  @IsString()
  @IsOptional()
  amount?: string;  // Añadir signo de interrogación para marcarlo como opcional

  // Valida que 'brand' sea una cadena de texto opcional
  @IsString()
  @IsOptional()
  brand?: string;  // Añadir signo de interrogación para marcarlo como opcional

  // Valida que 'line' sea una cadena de texto opcional
  @IsString()
  @IsOptional()
  line?: string;  // Añadir signo de interrogación para marcarlo como opcional

  // Valida que 'scent' sea una cadena de texto opcional
  @IsString()
  @IsOptional()
  scent?: string;  // Añadir signo de interrogación para marcarlo como opcional

  // Valida que 'available' sea un número y no esté vacío
  @IsNumber()
  @IsNotEmpty()
  available: number;  // Usa 'number' en lugar de 'Number'
}