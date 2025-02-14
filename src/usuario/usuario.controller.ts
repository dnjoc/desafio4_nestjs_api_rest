import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Public } from 'src/decorators';
import { Roles } from 'src/decorators';
import { Role } from 'src/rol.enum';

@Controller('users')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Public()
  @Post('/register')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Public()
  @Post('/login')
  login(@Body() createUsuarioDto: CreateUsuarioDto) {
    const { email, password } = createUsuarioDto;
    return this.usuarioService.login(email, password);
  }

  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Roles(Role.Admin)
  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }
}
