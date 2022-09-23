import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date, ObjectId, Types } from 'mongoose';

@Schema()
export class Request {
    @Prop({ type: Types.ObjectId })
    _id: ObjectId;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({ type: Date })
    date: Date;
}

export type RequestDocument = Request & Document;

export const RequestSchema = SchemaFactory.createForClass(Request);
