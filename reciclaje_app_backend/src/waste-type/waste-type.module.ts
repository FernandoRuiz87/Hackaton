import { Module } from '@nestjs/common';
import { WasteTypeService } from './waste-type.service';
import { WasteTypeController } from './waste-type.controller';

@Module({
  controllers: [WasteTypeController],
  providers: [WasteTypeService],
})
export class WasteTypeModule {}
