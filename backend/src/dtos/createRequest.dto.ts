import { Types } from 'mongoose';

export class CreateRequestDto {
    _id: Types.ObjectId;
    readonly name: string;
    readonly description: string;
    readonly date: number;
}
