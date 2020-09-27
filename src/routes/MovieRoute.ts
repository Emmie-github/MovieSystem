import Express from "express";
import { MovieService } from "../services/MovieService";
import { ResponseHelper } from "./ResponseHelper";

// 搭建Movie路由API接口
// localhost:3000/api/movie/xxx     params
// localhost:3000/api/movie?id=xxx  query

const router = Express.Router();
// 按id获取数据
router.get("/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await MovieService.findById(movieId);
    //   res.send("get请求" + movieId);
    ResponseHelper.sendData(movie, res);
  } catch {
    ResponseHelper.sendData(null, res);
  }
});

// 分页获取数据
router.get("/", async (req, res) => {
  const result = await MovieService.find(req.query);
  ResponseHelper.sendPageData(result, res);
});

// 发布数据
router.post("/", async (req, res) => {
  const result = await MovieService.add(req.body);
  if (Array.isArray(result)) {
    ResponseHelper.sendError(result, res);
  } else {
    ResponseHelper.sendData(result, res);
  }
});

// 修改数据
router.put("/:id", async (req, res) => {
  try {
    const result = await MovieService.edit(req.params.id, req.body);
    if (result.length > 0) {
      ResponseHelper.sendError(result, res); //错误
    } else {
      ResponseHelper.sendData(true, res); //正确
    }
  } catch {
    ResponseHelper.sendError("id错误", res);
  }
});

// 删除数据
router.delete("/:id", async (req, res) => {
  try {
    await MovieService.delete(req.params.id);
    ResponseHelper.sendData(true, res);
  } catch {
    ResponseHelper.sendError("id错误", res);
  }
});

export default router;
