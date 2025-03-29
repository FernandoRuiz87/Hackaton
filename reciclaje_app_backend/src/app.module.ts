import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { CompaniesModule } from "./companies/companies.module";
import { WasteTypeModule } from "./waste-type/waste-type.module";
import { CompanyWasteTypeModule } from "./company-waste-type/company-waste-type.module";
import { TrashBinModule } from "./trash-bin/trash-bin.module";
import { BinWasteTypeModule } from "./bin-waste-type/bin-waste-type.module";
import { CollectionModule } from "./collection/collection.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.host,
      port: +process.env.port,
      username: "postgres",
      password: process.env.pass,
      database: process.env.name,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CompaniesModule,
    WasteTypeModule,
    CompanyWasteTypeModule,
    TrashBinModule,
    BinWasteTypeModule,
    CollectionModule,
  ],
})
export class AppModule {}
