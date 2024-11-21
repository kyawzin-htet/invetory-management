import { Router } from "express";
import { getExpensesByCaategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpensesByCaategory);

export default router;