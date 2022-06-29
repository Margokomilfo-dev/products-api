import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../settings/types';

class RatingType {
  @ApiProperty()
  rate: number;
  @ApiProperty()
  count: number;
}

export class ProductEntity extends BaseEntity {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  image: string;
  @ApiProperty({
    type: RatingType,
  })
  rating: RatingType;
}
