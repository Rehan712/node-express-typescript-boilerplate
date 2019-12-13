import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler, Request, Response, NextFunction } from "express";

function bodyValidator(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid body: Body not found");
      return;
    }

    for (let key of keys) {
      if (!req.body(key)) {
        res.status(422).send(`${key} not found!`);
        return;
      }
    }
    next();
  };
}

export function controller(routePrefix: string) {
  return function(target: any) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        "method",
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidator(requiredBodyProps);

      if (path) {
        router[method](
          routePrefix + path,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
