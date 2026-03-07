import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

interface GoogleUser {
  id: number;
  email: string;
  name: string;
  picture?: string;
}

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthCallback(@Req() req: Request & { user: GoogleUser }) {
    const user = req.user;
    return {
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
      token: `google-${user.id}-${Date.now()}`,
    };
  }

  @Get('me')
  @UseGuards(AuthGuard('google'))
  getProfile(@Req() req: Request & { user: GoogleUser }) {
    return req.user;
  }
}
