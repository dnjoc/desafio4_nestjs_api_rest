import { Test, TestingModule } from '@nestjs/testing';
import { RepuestoService } from './repuesto.service';

describe('RepuestoService', () => {
  let service: RepuestoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepuestoService],
    }).compile();

    service = module.get<RepuestoService>(RepuestoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
