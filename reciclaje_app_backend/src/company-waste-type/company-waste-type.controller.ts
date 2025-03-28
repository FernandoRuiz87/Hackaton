import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyWasteTypeService } from './company-waste-type.service';
import { CreateCompanyWasteTypeDto } from './dto/create-company-waste-type.dto';
import { UpdateCompanyWasteTypeDto } from './dto/update-company-waste-type.dto';

@Controller('company-waste-type')
export class CompanyWasteTypeController {
  constructor(private readonly companyWasteTypeService: CompanyWasteTypeService) {}

  @Post()
  create(@Body() createCompanyWasteTypeDto: CreateCompanyWasteTypeDto) {
    return this.companyWasteTypeService.create(createCompanyWasteTypeDto);
  }

  @Get()
  findAll() {
    return this.companyWasteTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyWasteTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyWasteTypeDto: UpdateCompanyWasteTypeDto) {
    return this.companyWasteTypeService.update(+id, updateCompanyWasteTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyWasteTypeService.remove(+id);
  }
}
