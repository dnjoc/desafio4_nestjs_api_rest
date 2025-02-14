import { Test, TestingModule } from '@nestjs/testing';
import { RepuestoController } from './repuesto.controller';
import { RepuestoService } from './repuesto.service';

describe('RepuestoController', () => {
  let controller: RepuestoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepuestoController],
      providers: [RepuestoService],
    }).compile();

    controller = module.get<RepuestoController>(RepuestoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
