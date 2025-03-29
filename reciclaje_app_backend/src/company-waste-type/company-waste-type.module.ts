import { Module } from '@nestjs/common';
import { CompanyWasteTypeService } from './company-waste-type.service';
import { CompanyWasteTypeController } from './company-waste-type.controller';

@Module({
  controllers: [CompanyWasteTypeController],
  providers: [CompanyWasteTypeService],
})
export class CompanyWasteTypeModule {}
