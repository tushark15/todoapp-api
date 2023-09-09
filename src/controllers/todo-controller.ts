import Todo from "../models/Todo";
import { Request, Response, NextFunction } from "express";
import { Todo_interface } from "../models/Todo";

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, completed } = req.body;
  const createdTodo = new Todo({ title, completed });

  try {
    await createdTodo.save();
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
    return next();
  }

  res.json(createdTodo);
};

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  try {
    const skips = (page - 1) * limit;
    const totalTodos = await Todo.countDocuments();
    const totalPages = Math.ceil(totalTodos / limit);
    const todos = await Todo.find().skip(skips).limit(limit);

    const response = {
      page,
      limit,
      totalPages,
      totalTodos,
      todos,
    };
    res.json(response);
  } catch (err) {
    res.status(404).json({ error: "Not Found" });
    return next();
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.params.todoId;
  let todo: Todo_interface | null;
  try {
    todo = await Todo.findById(todoId);
  } catch (err) {
    res.status(500).json({ error: "Couldn't Find todo, please try again" });
    return next();
  }

  if (!todo) {
    res.status(404).json({ error: "Not Found" });
    return next();
  }

  try {
    await todo.deleteOne();
  } catch (err) {
    res
      .status(500)
      .json({ error: "Something went wrong, could not delete Todo" });
    return next();
  }

  res.status(200).json({ message: "Todo deleted successfully" });
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.params.todoId;
  let updatedTodo: Todo_interface | null;
  try {
    updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { completed: req.body.completed as boolean },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
    return next();
  }
  res.json("Todo updated");
};
