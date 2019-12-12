import { Router, Request, Response } from "express";
import { NextFunction } from "connect";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(400).send("Not Permitted");
}

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

router.get("/login", (req: Request, res: Response) => {
  res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (
    email &&
    password &&
    email === "rehan@gmail.com" &&
    password === "12345"
  ) {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.json({ email, password });
  }
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("welcome to protected Route");
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

export { router };
