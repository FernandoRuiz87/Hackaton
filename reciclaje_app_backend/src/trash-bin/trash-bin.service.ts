import { Injectable } from '@nestjs/common';
import { CreateTrashBinDto } from './dto/create-trash-bin.dto';
import { UpdateTrashBinDto } from './dto/update-trash-bin.dto';

@Injectable()
export class TrashBinService {
  create(createTrashBinDto: CreateTrashBinDto) {
    return 'This action adds a new trashBin';
  }

  findAll() {
    return `This action returns all trashBin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trashBin`;
  }

  update(id: number, updateTrashBinDto: UpdateTrashBinDto) {
    return `This action updates a #${id} trashBin`;
  }

  remove(id: number) {
    return `This action removes a #${id} trashBin`;
  }
}
