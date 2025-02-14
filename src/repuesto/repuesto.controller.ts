import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RepuestoService } from './repuesto.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { Repuesto } from './schemas/repuesto.schema/repuesto.schema';
import { Roles } from 'src/decorators';
import { Role } from 'src/rol.enum';

@Controller('repuestos')
export class RepuestoController {
  constructor(private readonly repuestoService: RepuestoService) {}

  @Roles(Role.Admin)
  @Post()
  async create(
    @Body() createRepuestoDto: CreateRepuestoDto,
  ): Promise<Repuesto> {
    return this.repuestoService.create(createRepuestoDto);
  }

  @Roles(Role.Admin, Role.User)
  @Get()
  async findAll(): Promise<Repuesto[]> {
    return this.repuestoService.findAll();
  }

  @Roles(Role.Admin)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Repuesto> {
    return this.repuestoService.findOne(id);
  }

  @Roles(Role.Admin, Role.User)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createRepuestoDto: CreateRepuestoDto,
  ): Promise<Repuesto> {
    return this.repuestoService.update(id, createRepuestoDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Repuesto> {
    return this.repuestoService.remove(id);
  }
}
