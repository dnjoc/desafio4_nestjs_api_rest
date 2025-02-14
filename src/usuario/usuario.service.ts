import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/usuario.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(createUsuarioDto.password, 10);
      const newUser = new this.userModel({
        ...createUsuarioDto,
        password: hashedPassword,
      });
      return await newUser.save();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      //console.log('error del DTO', error);
      throw new HttpException(
        'los datos suministrados no se ajustan al UserDTO, intente de nuevo',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (user) {
      const esValidaContrasena = await bcrypt.compare(password, user.password);
      if (esValidaContrasena) {
        const payload = {
          email: user.email,
          sub: user._id,
          name: user.name,
          roles: user.role,
        };
        return { access_token: await this.jwtService.signAsync(payload) };
      } else {
        throw new HttpException('contraseña invalida', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('usuario no encontrado', HttpStatus.NOT_FOUND);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
