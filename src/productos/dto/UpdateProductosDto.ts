import { IsBoolean, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateProductosDto {
  // Validación opcional para asegurarse de que el código es un número
  @IsOptional()
  @IsNumber()
  code?: Number;

  // Validación opcional para el tipo de producto, asegurando que es una cadena de texto
  @IsOptional()
  @IsString()
  type?: string;

  // Validación opcional para el stock, asegurando que es un booleano
  @IsOptional()
  @IsBoolean()
  stock?: boolean;


    @IsString()
    @IsOptional()
    description: string;
  
    @IsNumber()
    @IsOptional()
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

