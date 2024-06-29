import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    const userId = 1; 
    const token = await this.authService.generateJwtToken(userId);
    return { token };
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  protectedRoute() {
    return 'Rota protegida acessada com sucesso!';
  }
}
