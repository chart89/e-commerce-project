import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'xrwe4543534',
        signOptions: {
          expiresIn: '12h',
        },
      }),
    }),
  ],
})
export class AuthModule {}
