import express from "express";

export class Application {
  private static instance: express.Application;
  static get getInstance() {
    if (!Application.instance) {
      Application.instance = express();
    }
    return Application.instance;
  }
}
