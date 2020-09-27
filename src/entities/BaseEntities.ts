import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { validate } from "class-validator";

//验证电影数据、验证查询条件的父类(不产生对象,设置成抽象类abstract)
export abstract class BaseEntities {
  /**
   *验证当前Movie、SearchCondition对象
   * @param {boolean} [skipMissing=false]
   * @returns {Promise<string[]>} 返回错误数组
   * @memberof BaseEntities
   */
  public async validateThis(skipMissing = false): Promise<string[]> {
    const errors = await validate(this, {
      skipMissingProperties: skipMissing, //修改时略过不需要修改的
    });
    const temp = errors.map((e) => Object.values(e.constraints!)); // 二维数组
    const result: string[] = [];
    temp.forEach((t) => {
      result.push(...t);
    });
    return result;
  }

  /**
   *将一个平面对象转换成一个Movie、SearchCondition类的对象
   * @static
   * @template T
   * @param {ClassType<T>} cls
   * @param {object} plainObject
   * @returns {T}
   * @memberof BaseEntities
   */
  protected static baseTransform<T>(cls: ClassType<T>, plainObject: object): T {
    if (plainObject instanceof cls) {
      return plainObject;
    }
    return plainToClass(cls, plainObject);
  }
}
