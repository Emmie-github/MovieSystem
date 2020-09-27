import Mongoose from "mongoose";
import MovieModel from "./MovieSchema";

Mongoose.connect("mongodb://localhost:27017/dmoviedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("连接数据库成功"));

export { MovieModel };
