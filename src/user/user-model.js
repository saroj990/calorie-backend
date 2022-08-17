import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    // apiToken: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  },
);

export default mongoose.model('user', UserSchema);
