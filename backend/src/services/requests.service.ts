import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateRequestDto } from 'src/dtos/createRequest.dto';
import { EditRequestDto } from 'src/dtos/editRequest.dto';
import { Request, RequestDocument } from 'src/schemas/request.schema';

@Injectable()
export class RequestsService {
    constructor(
        @InjectModel(Request.name) private requestModel: Model<RequestDocument>,
    ) {}

    async findAll(): Promise<Request[]> {
        return this.requestModel.find().exec();
    }

    async create(createRequestDto: CreateRequestDto): Promise<Request> {
        createRequestDto._id = new Types.ObjectId();

        return await this.requestModel.create(createRequestDto);
    }

    async delete(id: string) {
        await this.requestModel.deleteOne({ _id: new Types.ObjectId(id) });
    }

    async edit(id: string, editRequestDto: EditRequestDto) {
        await this.requestModel.updateOne(
            { _id: new Types.ObjectId(id) },
            editRequestDto,
        );
    }
}
