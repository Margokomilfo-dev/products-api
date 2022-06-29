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

export class UpdateProductDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  category: string;

  @IsString()
  @ApiProperty()
  image: string;

  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @ApiProperty({ type: RatingObj })
  @Type(() => RatingObj)
  rating: RatingObj;
}
