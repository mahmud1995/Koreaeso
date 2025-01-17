// "@types/node": "^22.10.6",
import express from "express";
import path from "path";
import routerAdmin from "./router-admin";
import router from "./router";
// 1 Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // __dirname = /Usersdan srcgacha path, public = static folderga aaylandi
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2 Sessions

// 3 Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4 Routers
app.use("/admin", routerAdmin);
app.use("/", router);

export default app;
