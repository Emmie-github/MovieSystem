import "reflect-metadata";
import Express from "express";
import MovieRouter from "./routes/MovieRoute";
import UploadRouter from "./routes/UploadRoute";
import history from "connect-history-api-fallback";

const app = Express();
app.use(history());
// 前端打包的页面=>访问到界面
app.use("/", Express.static("public/build"));
// 访问图片到界面上
app.use("/upload", Express.static("public/upload"));

// 配置中间体,用于解析消息体中的json格式数据
app.use(Express.json());
app.use("/api/movie", MovieRouter);
app.use("/api/upload", UploadRouter);

app.listen(3000);

// import { validate } from "class-validator";
// import { Movie } from "./entities/Movies";
// import { plainToClass } from "class-transformer";
// import { MovieModel } from "./db/index";
// import { MovieService } from "./services/MovieService";
// const condition: any = {
//   page: 1,
//   // limit: 5,
//   key: "10",
// };
// MovieService.find(condition).then((result) => {
//   if (result.errors.length > 0) {
//     console.log(result.errors);
//   } else {
//     result.data.forEach((item) => {
//       console.log(item.name);
//     });
//     console.log(`总数：${result.count}`);
//   }
// });

// function getRandom(min: number, max: number) {
//   const dec = max - min;
//   return Math.floor(Math.random() * dec + min);
// }
// for (let i = 0; i < 100; i++) {
//   const m = new Movie();
//   m.name = "电影" + (i + 1);
//   m.timeLong = 90;
//   m.types = ["喜剧"];
//   m.areas = ["中国大陆", "美国"];
//   m.isClassic = true;
//   m.timeLong = getRandom(70, 150);
// MovieService.add(m).then((result) => {
//   if (Array.isArray(result)) {
//     console.log(result);
//   } else {
//     console.log("添加成功：" + result._id);
//   }
// });
// }

// MovieService.findById("5f6985261fb2736ec43d5554").then((result) => {
//   console.log("查询结果：" + result);
// });

// MovieService.delete("5f6979686343e44a30f85310").then(() => {
//   console.log("删除成功");
// });
// const m: any = {
//   name: "红海行动",
// isHot: true,

// description: "一部爱国的影片",
// timeLong: 90,
// types: ["喜剧"],
// areas: ["中国大陆"],
// };
// MovieService.edit("5f6979686343e44a30f85310", m).then((result) => {
//   console.log(result);
// });

// MovieService.add(m).then((result) => {
//   // const r: Exclude<typeof result, string[]> = result as IMovie;
//   if (Array.isArray(result)) {
//     console.log(result);
//   } else {
//     console.log(result._id);
//   }
// });

// const m = new Movie();
// m.validateThis().then((err) => {
//   console.log(err);
// });

// MovieModel.find().then((ms) => {
//   console.log(ms);
// });

// const m = new Movie();
// const m: any = {};

// m.name = 222;
// m.types = "喜剧";
// m.areas = ["中国大陆"];
// m.timeLong = 22;

// // validate(m).then((errors) => {
// //   console.log(errors);
// // });

// const movie = plainToClass(Movie, m as object);
// // console.log(movie, typeof movie.name);
// validate(movie).then((errors) => {
//   console.log(errors);
// });
