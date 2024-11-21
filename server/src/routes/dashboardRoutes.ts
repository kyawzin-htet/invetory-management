import { Router } from "express";
import { getDashboardMaterics } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardMaterics);

export default router;