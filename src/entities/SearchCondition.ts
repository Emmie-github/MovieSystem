import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";
import { BaseEntities } from "./BaseEntities";

// 验证查询条件
// class-validator(验证)和 class-transformer(平面对象转换成类对象)库

export class SearchCondition extends BaseEntities {
  @IsInt({ message: "页码必须是一个整数" })
  @Min(1, { message: "页码最小值为1" })
  @Type(() => Number)
  public page: number = 1;

  @IsInt({ message: "页码必须是一个整数" })
  @Min(1, { message: "页码最小值为1" })
  @Type(() => Number)
  public limit: number = 10;

  @Type(() => String)
  public key: string = "";

  /**
   *将一个平面对象转换成一个SearchCondition类的对象
   * @static
   * @param {object} plainObject 平面对象
   * @returns {SearchCondition}
   * @memberof SearchCondition
   */
  public static transform(plainObject: object): SearchCondition {
    //   if (plainObject instanceof SearchCondition) {
    //     return plainObject;
    //   }
    //   return plainToClass(SearchCondition, plainObject);
    // }

    return this.baseTransform(SearchCondition, plainObject);
  }
}
