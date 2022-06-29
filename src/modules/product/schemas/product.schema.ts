import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from '../../../settings/types';

class RatingType {
  @Prop({ required: true })
  rate: number;
  @Prop({ required: true })
  count: number;
}

@Schema({
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
})
export class Product extends BaseEntity {
  @Prop({ required: true })
  id: number;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  category: string;
  @Prop({ required: false, default: null })
  image: string;
  @Prop({ type: RatingType })
  rating: RatingType;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;
