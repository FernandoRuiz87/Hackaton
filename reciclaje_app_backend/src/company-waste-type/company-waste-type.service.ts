import { Injectable } from '@nestjs/common';
import { CreateCompanyWasteTypeDto } from './dto/create-company-waste-type.dto';
import { UpdateCompanyWasteTypeDto } from './dto/update-company-waste-type.dto';

@Injectable()
export class CompanyWasteTypeService {
  create(createCompanyWasteTypeDto: CreateCompanyWasteTypeDto) {
    return 'This action adds a new companyWasteType';
  }

  findAll() {
    return `This action returns all companyWasteType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyWasteType`;
  }

  update(id: number, updateCompanyWasteTypeDto: UpdateCompanyWasteTypeDto) {
    return `This action updates a #${id} companyWasteType`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyWasteType`;
  }
}
