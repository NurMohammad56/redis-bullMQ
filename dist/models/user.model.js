import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
});
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
