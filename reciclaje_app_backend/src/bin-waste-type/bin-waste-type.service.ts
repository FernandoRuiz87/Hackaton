import { Injectable } from '@nestjs/common';
import { CreateBinWasteTypeDto } from './dto/create-bin-waste-type.dto';
import { UpdateBinWasteTypeDto } from './dto/update-bin-waste-type.dto';

@Injectable()
export class BinWasteTypeService {
  create(createBinWasteTypeDto: CreateBinWasteTypeDto) {
    return 'This action adds a new binWasteType';
  }

  findAll() {
    return `This action returns all binWasteType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} binWasteType`;
  }

  update(id: number, updateBinWasteTypeDto: UpdateBinWasteTypeDto) {
    return `This action updates a #${id} binWasteType`;
  }

  remove(id: number) {
    return `This action removes a #${id} binWasteType`;
  }
}
