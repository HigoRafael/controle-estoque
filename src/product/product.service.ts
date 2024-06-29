import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async isProductValidForPayment(productId: number): Promise<boolean> {
    try {
      const product = await this.productRepository.findOneOrFail({ where: { id: productId } });

      
      const currentDate = new Date();
      if (product.expiryDate < currentDate) {
        return false; 
      }

      return true; 
    } catch (error) {
      if (error instanceof NotFoundException) {
        return false;
      }
      throw error; 
    }
  }
}
