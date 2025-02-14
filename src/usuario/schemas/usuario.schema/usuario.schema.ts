import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'user'] },
  photo: { type: String },
  created_at: { type: Date, default: Date.now },
});
