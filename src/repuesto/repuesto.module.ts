import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RepuestoController } from './repuesto.controller';
import { RepuestoService } from './repuesto.service';
import { Repuesto, RepuestoSchema } from './schemas/repuesto.schema/repuesto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Repuesto.name, schema: RepuestoSchema }])
  ],
  controllers: [RepuestoController],
  providers: [RepuestoService],
})
export class RepuestoModule {}
