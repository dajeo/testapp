import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestsModule } from './requests.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/test'),
        RequestsModule,
    ],
})
export class AppModule {}
