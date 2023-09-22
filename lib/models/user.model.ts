import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  image: String,
  onboarded: { type: Boolean, default: false },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  catagories: [
    {
      name: { type: String, required: true },
    },
  ],
  sortMethod: { type: String, default: 'dueDate' },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
