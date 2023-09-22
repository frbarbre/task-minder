import mongoose from 'mongoose';

const tasksSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  dueDate: {
    type: String,
  },
  priority: { type: Number },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
  catagory: { type: String },
  isDone: { type: Boolean, default: false },
});

const Tasks = mongoose.models.Task || mongoose.model('Task', tasksSchema);

export default Tasks;
