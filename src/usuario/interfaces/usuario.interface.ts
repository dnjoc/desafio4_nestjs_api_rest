import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
  readonly photo: string;
  readonly createdAt: Date;
}
