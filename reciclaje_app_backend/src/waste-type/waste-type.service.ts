import { Injectable } from '@nestjs/common';
import { CreateWasteTypeDto } from './dto/create-waste-type.dto';
import { UpdateWasteTypeDto } from './dto/update-waste-type.dto';

@Injectable()
export class WasteTypeService {
  create(createWasteTypeDto: CreateWasteTypeDto) {
    return 'This action adds a new wasteType';
  }

  findAll() {
    return `This action returns all wasteType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wasteType`;
  }

  update(id: number, updateWasteTypeDto: UpdateWasteTypeDto) {
    return `This action updates a #${id} wasteType`;
  }

  remove(id: number) {
    return `This action removes a #${id} wasteType`;
  }
}
