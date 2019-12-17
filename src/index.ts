import { Application } from "./App";
import { AppRouter } from "./AppRouter";

const router = AppRouter.getInstance();
export { router };

export default Application.getInstance;
