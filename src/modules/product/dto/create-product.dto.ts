import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class RatingObj {
  @IsNumber()
  @IsDefined()
  @ApiProperty()
  rate: number;

  @IsNumber()
  @IsDefined()
  @ApiProperty()
  count: number;
}

export class CreateProductDto {
  @IsNumber()
  @IsDefined()
  @ApiProperty()
  id: number;

  @IsString()
  @IsDefined()
  @ApiProperty()
  title: string;

  @IsNumber()
  @IsDefined()
  @ApiProperty()
  price: number;

  @IsString()
  @IsDefined()
  @ApiProperty()
  description: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  category: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  image: string;

  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @ApiProperty({ type: RatingObj })
  @Type(() => RatingObj)
  rating: RatingObj;
}
