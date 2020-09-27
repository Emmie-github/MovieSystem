import { Response } from "express";
import { ISearchResult } from "../entities/CommonType";
// 响应结果
export class ResponseHelper {
  /**
   *响应错误
   * @static
   * @param {(string | string[])} error  错误:字符串|字符串数组
   * @param {Response} res  响应:Response
   * @memberof ReponseHelper
   */
  public static sendError(error: string | string[], res: Response) {
    let err: string;
    if (Array.isArray(error)) {
      err = error.join(";");
    } else {
      err = error;
    }
    //完成响应
    res.send({
      err,
      data: null,
    });
  }
  /**
   *响应普通数据
   * @static
   * @param {*} data 数据:any
   * @param {Response} res 响应:Response
   * @memberof ReponseHelper
   */
  public static sendData(data: any, res: Response) {
    res.send({
      err: "",
      data,
    });
  }
  /**
   *响应分页数据
   * @static
   * @template T
   * @param {ISearchResult<T>} result 查询结果(总数、数据、错误)
   * @param {Response} res 响应:Response
   * @memberof ReponseHelper
   */
  public static sendPageData<T>(result: ISearchResult<T>, res: Response) {
    if (result.errors.length > 0) {
      //有错误
      this.sendError(result.errors, res);
    } else {
      res.send({
        err: "",
        data: result.data,
        total: result.count,
      });
    }
  }
}
