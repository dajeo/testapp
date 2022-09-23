import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestsController } from 'src/controllers/requests.controller';
import { Request, RequestSchema } from 'src/schemas/request.schema';
import { RequestsService } from 'src/services/requests.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Request.name,
                schema: RequestSchema,
            },
        ]),
    ],
    controllers: [RequestsController],
    providers: [RequestsService],
})
export class RequestsModule {}
