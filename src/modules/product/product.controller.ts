import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product-entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({
    description: 'The getProducts has been successfully',
    type: [ProductEntity],
  })
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({
    description: 'The getProducts has been successfully',
    type: ProductEntity,
  })
  async getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

  @Post()
  @ApiOperation({ summary: 'create product' })
  @ApiOkResponse({
    description: 'The createProduct has been successfully',
    type: ProductEntity,
  })
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Post('/:id')
  @ApiOperation({ summary: 'update product by id' })
  @ApiOkResponse({
    description: 'The createProduct has been successfully',
    type: ProductEntity,
  })
  async updateProduct(@Param('id') id: number, @Body() dto: UpdateProductDto) {
    return this.productService.updateProduct(id, dto);
  }

  @ApiOperation({ summary: 'delete all products' })
  @ApiOkResponse({
    description: 'The delProduct has been successfully',
    type: null,
  })
  @Delete()
  async delProduct() {
    return this.productService.deleteAll();
  }
}
