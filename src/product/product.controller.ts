import { Controller, Post, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    const isValid = await this.productService.isProductValidForPayment(product.id);
    if (!isValid) {
      throw new HttpException('Produto não está mais válido para pagamento.', HttpStatus.BAD_REQUEST);
    }

    return this.productService.createProduct(product);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
