import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';

//12.4.1 importar el decorador
import { Public } from 'src/decorators';

@Controller('users')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Public()
  @Post('/register')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  //10.1 Configurar la ruta login
  @Public()
  @Post('/login')
  login(@Body() createUsuarioDto: CreateUsuarioDto) {
    const { email, password } = createUsuarioDto;
    return this.usuarioService.login(email, password);
  }

  @Public()
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }
}
