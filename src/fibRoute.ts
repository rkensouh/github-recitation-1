import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const parsedNum = parseInt(num, 10);
  if (isNaN(parsedNum)) {
    res.status(400).send("Invalid number");
    return;
  }

  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};        