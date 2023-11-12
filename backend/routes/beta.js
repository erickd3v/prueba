import express from "express";
import { getData } from "../controllers/beta.js";

const router = express.Router();

const path = 'beta';

export const routeBeta = router.get(
    `/${path}`,
    getData
)
