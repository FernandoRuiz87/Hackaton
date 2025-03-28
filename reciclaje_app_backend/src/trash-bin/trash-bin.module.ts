import { Module } from '@nestjs/common';
import { TrashBinService } from './trash-bin.service';
import { TrashBinController } from './trash-bin.controller';

@Module({
  controllers: [TrashBinController],
  providers: [TrashBinService],
})
export class TrashBinModule {}
