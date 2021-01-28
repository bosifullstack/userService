import mongoose from 'mongoose';

interface ITodo {
  userEmail: string;
  nome: string;
  data: Date;
  hora: string;
}

interface TodoModelInterface extends mongoose.Model<any> {
  build(attr: ITodo): any
}

const todoSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  }, 
  nome: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
})

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr);
}

export const Todo = mongoose.model<any, TodoModelInterface>('Todo', todoSchema);