import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './schemas/usuario.schema/usuario.schema';

//10.10 importar el modulo de JWT
import { JwtModule } from '@nestjs/jwt';

//11.2 importar las constantes de este recurso asociado que es jwtConstant
import { jwtConstant } from './constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UsuarioSchema,
      },
    ]),
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '1h' },
      global: true,
    }),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
