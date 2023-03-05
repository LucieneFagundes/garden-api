import { app } from "./app";

app.listen(process.env.PORT ? Number(process.env.PORT) : 8080, () => {
  console.log("Server is running...");
});
