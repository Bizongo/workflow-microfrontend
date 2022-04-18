import { init } from "@rematch/core";
import * as modules from "./modules";
const store = init({ models: modules });
export default store;
