import Elysia from "elysia";
import { videos } from "./data";

const app = new Elysia().get(
  "/",
  () => videos[Math.floor(videos.length * Math.random())],
);

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`🦊 Elysia is running at port ${process.env.PORT ?? 3000}`);
});

export default app;
