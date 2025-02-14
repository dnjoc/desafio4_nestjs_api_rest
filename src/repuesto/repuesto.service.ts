import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { Repuesto } from './schemas/repuesto.schema/repuesto.schema';

@Injectable()
export class RepuestoService {
  constructor(
    @InjectModel(Repuesto.name) private readonly repuestoModel: Model<Repuesto>,
  ) {}

  async create(createRepuestoDto: CreateRepuestoDto): Promise<Repuesto> {
    const createdRepuesto = new this.repuestoModel(createRepuestoDto);
    return createdRepuesto.save();
  }

  async findAll(): Promise<Repuesto[]> {
    return this.repuestoModel.find().exec();
  }

  async findOne(id: string): Promise<Repuesto> {
    return this.repuestoModel.findById(id).exec();
  }

  async update(id: string, createRepuestoDto: CreateRepuestoDto): Promise<Repuesto> {
    return this.repuestoModel.findByIdAndUpdate(id, createRepuestoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Repuesto> {
    return this.repuestoModel.findByIdAndDelete(id).exec();
  }
}
