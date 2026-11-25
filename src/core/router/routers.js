import { initsales } from "../../features/sales/index.js";
import { initTask } from "../../features/tasks/index.js";
import { initusers } from "../../features/users/index.js";

export const routers = {
    users: initusers,
    tasks: initTask,
    sales: initsales
};