import { Router } from "express";
import {
  addTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../controllers/todo-controller";

const router = Router();

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new Todo
 *     description: Create a new Todo item.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successfully created a new Todo item.
 *       500:
 *         description: Server error.
 */
router.post("/", addTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get a list of Todo
 *     description: Retrieve a list of Todo items with pagination support.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number (default is 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page (default is 10).
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of Todo items.
 *       404:
 *         description: Not Found error.
 *       500:
 *         description: Server error.
 */
router.get("/", getTodos);

/**
 * @swagger
 * /todos/{todoId}:
 *   delete:
 *     summary: Delete a Todo
 *     description: Delete a Todo item by its ID.
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Todo item to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted the Todo item.
 *       404:
 *         description: Not Found error.
 *       500:
 *         description: Server error.
 */
router.delete("/:todoId", deleteTodo);

/**
 * @swagger
 * /todos/{todoId}:
 *   patch:
 *     summary: Update a Todo
 *     description: Update a Todo item by its ID.
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Todo item to update.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successfully updated the Todo item.
 *       404:
 *         description: Not Found error.
 *       500:
 *         description: Server error.
 */
router.patch("/:todoId", updateTodo);

export default router;
