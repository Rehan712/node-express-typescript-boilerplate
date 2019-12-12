import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router } from "./routes/loginRoutes";
import "./controllers/LoginControllers";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["ksdfaslkdjf"] }));

app.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
        <h1>Hi therer</h1>
    </div>
`);
  } else {
    res.send(`
    <div>
        <h1>You are not looged in</h1>
    </div>
`);
  }
});
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log("server is listening on port 3000"));
