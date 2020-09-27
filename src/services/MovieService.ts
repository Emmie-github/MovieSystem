import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { ISearchResult } from "../entities/CommonType";
import { Movie } from "../entities/Movies";
import { SearchCondition } from "../entities/SearchCondition";

// 电影的增、删、改、查
export class MovieService {
  /**
   *增
   * @static
   * @param {Movie} movie 电影对象
   * @returns {(Promise<IMovie | string[]>)} 返回电影数组、错误的数组
   * @memberof MovieService
   */
  public static async add(movie: Movie): Promise<IMovie | string[]> {
    //   1、转换类型
    movie = Movie.transform(movie);
    // 2、数据验证
    const errors = await movie.validateThis();
    if (errors.length > 0) {
      return errors;
    }
    // 3、添加到数据库
    return await MovieModel.create(movie);
  }
  /**
   *改
   * @static
   * @param {string} id
   * @param {Movie} movie 电影对象
   * @returns {Promise<string[]>} 返回一个错误的数组
   * @memberof MovieService
   */
  public static async edit(id: string, movie: Movie): Promise<string[]> {
    //   1、转换类型
    const movieObj = Movie.transform(movie); //重新赋值是为了不替换之前数据验证(entities的Movies)设置的默认值
    // 2、数据验证
    const errors = await movieObj.validateThis(true); //参数true 修改时略过不需要修改的
    if (errors.length > 0) {
      return errors;
    }
    // 3、修改到数据库
    await MovieModel.updateOne({ _id: id }, movie);
    return [];
  }
  /**
   *删
   * @static
   * @param {string} id
   * @returns {Promise<void>} 没有返回值
   * @memberof MovieService
   */
  public static async delete(id: string): Promise<void> {
    await MovieModel.deleteOne({ _id: id });
  }
  /**
   *按Id查
   * @static
   * @param {string} id
   * @returns {(Promise<IMovie | null>)} 返回电影数组|空
   * @memberof MovieService
   */
  public static async findById(id: string): Promise<IMovie | null> {
    return await MovieModel.findById({ _id: id });
  }
  /**
   *分页查询(page、limit、key)
   * @static
   * @param {SearchCondition} condition 查询条件
   * @returns {Promise<ISearchResult<IMovie>>} 返回电影查询结果
   * @memberof MovieService
   */
  public static async find(condition: SearchCondition): Promise<ISearchResult<IMovie>> {
    //   1、转换类型
    const conditionObj = SearchCondition.transform(condition);
    // 2、数据验证
    const errors = await conditionObj.validateThis(true);
    if (errors.length > 0) {
      return {
        count: 0,
        data: [],
        errors,
      };
    }
    // 3、查询数据
    const movies = await MovieModel.find({
      name: { $regex: new RegExp(conditionObj.key) },
    })
      .skip((conditionObj.page - 1) * conditionObj.limit)
      .limit(conditionObj.limit);
    const count = await MovieModel.find({
      name: { $regex: new RegExp(conditionObj.key) },
    }).countDocuments();
    return {
      count,
      data: movies,
      errors: [],
    };
  }
}
