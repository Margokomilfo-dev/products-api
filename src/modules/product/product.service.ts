import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<Array<ProductDocument>> {
    return this.productModel.find({}).lean();
  }
  async getProduct(id: number): Promise<Array<ProductDocument>> {
    return this.productModel.findOne({ id }).lean();
  }
  async createProduct(dto: CreateProductDto): Promise<ProductDocument> {
    return new this.productModel(dto).save();
  }
  async updateProduct(
    id: number,
    dto: UpdateProductDto,
  ): Promise<ProductDocument> {
    const product = await this.productModel.findOne({ id }).lean();
    return this.productModel.findOneAndUpdate(
      { id },
      { ...product, ...dto },
      { new: true },
    );
  }
  async deleteAll(): Promise<any> {
    return this.productModel.deleteMany({});
  }
}
