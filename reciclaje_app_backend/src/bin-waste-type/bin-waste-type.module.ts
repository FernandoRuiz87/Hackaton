import { Module } from '@nestjs/common';
import { BinWasteTypeService } from './bin-waste-type.service';
import { BinWasteTypeController } from './bin-waste-type.controller';

@Module({
  controllers: [BinWasteTypeController],
  providers: [BinWasteTypeService],
})
export class BinWasteTypeModule {}
