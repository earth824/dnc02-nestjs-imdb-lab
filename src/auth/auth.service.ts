import {
  ForbiddenException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from './dtos/login.dto';
import { BcryptService } from '../infrastructure/hash/bcrypt.service';
import { AccessTokenService } from './access-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly accessTokenService: AccessTokenService
  ) {}

  async register(dto: RegisterDto): Promise<void> {
    await this.userService.createUser({ ...dto, role: 'USER', status: true });
  }

  async login(dto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userService.getUserByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await this.bcryptService.compare(
      dto.password,
      user.password
    );
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.status) {
      throw new ForbiddenException('Account has been suspended');
    }

    const access_token = await this.accessTokenService.sign({
      sub: user.id.toString(),
      email: user.email,
      role: user.role
    });

    return { access_token };
  }
}
