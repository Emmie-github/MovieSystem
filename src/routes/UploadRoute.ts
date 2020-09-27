import Express from "express";
import multer from "multer";
import path from "path";
import { ResponseHelper } from "./ResponseHelper";
// 搭建图片路由API接口
const router = Express.Router();

// 存储
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../../public/upload"),
  filename(req, file, cb) {
    // 文件名
    const time = new Date().getTime();
    // const originFileName = file.originalname; //用户计算机上文件的名称
    //后缀名
    const extname = path.extname(file.originalname);
    //设置文件全称
    cb(null, `${time}${extname}`);
  },
});
const allowExtendsions = [".jpg", ".png", ".gif", ".bmp", ".jiff"];
//上传文件
const upload = multer({
  // dest: path.resolve(__dirname, "../../public/upload"),
  storage,
  limits: {
    fileSize: 1024 * 1024, //1M
  },
  fileFilter(req, file, cb) {
    const extname = path.extname(file.originalname);
    if (allowExtendsions.includes(extname)) {
      cb(null, true);
    } else {
      // cb(null, false);
      cb(new Error("文件类型不正确"));
    }
  },
}).single("imgfile");

router.post("/", (req, res) => {
  // res.send("上传文件成功");
  upload(req, res, (err) => {
    if (err) {
      // 发生错误
      ResponseHelper.sendError(err.message, res);
    } else {
      // 一切都好
      const url = `/upload/${req.file.filename}`;
      ResponseHelper.sendData(url, res);
    }
  });
});

// 上传文件
// const upload = multer({
//   dest: path.resolve(__dirname, "../../public/upload")
// });
// router.post("/", upload.single("imgfile"), (req, res) => {
//   //   console.log("处理文件上传");
//   res.send("上传文件成功！");
// });
export default router;
