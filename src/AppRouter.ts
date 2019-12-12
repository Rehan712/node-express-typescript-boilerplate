import express from "express";

export class AppRouter {
  private static instance: express.Router;

  static getInstance() {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
