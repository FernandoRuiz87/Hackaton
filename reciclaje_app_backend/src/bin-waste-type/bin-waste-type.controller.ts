import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BinWasteTypeService } from './bin-waste-type.service';
import { CreateBinWasteTypeDto } from './dto/create-bin-waste-type.dto';
import { UpdateBinWasteTypeDto } from './dto/update-bin-waste-type.dto';

@Controller('bin-waste-type')
export class BinWasteTypeController {
  constructor(private readonly binWasteTypeService: BinWasteTypeService) {}

  @Post()
  create(@Body() createBinWasteTypeDto: CreateBinWasteTypeDto) {
    return this.binWasteTypeService.create(createBinWasteTypeDto);
  }

  @Get()
  findAll() {
    return this.binWasteTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.binWasteTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBinWasteTypeDto: UpdateBinWasteTypeDto) {
    return this.binWasteTypeService.update(+id, updateBinWasteTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.binWasteTypeService.remove(+id);
  }
}
