import { Type } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  Max,
  Min,
  validate,
} from "class-validator";
import { BaseEntities } from "./BaseEntities";

// 验证电影数据
// class-validator(验证)和 class-transformer(平面对象转换成类对象)库
export class Movie extends BaseEntities {
  @IsNotEmpty({ message: "电影名称不可以为空" })
  @Type(() => String)
  public name: string;

  @IsNotEmpty({ message: "电影类型不可以为空" })
  @ArrayMinSize(1, { message: "电影类型长度至少有一个" })
  @IsArray({ message: "电影类型必须是一个数组" })
  @Type(() => String)
  public types: string[];

  @IsNotEmpty({ message: "上映地区不可以为空" })
  @ArrayMinSize(1, { message: "上映地区长度至少有一个" })
  @IsArray({ message: "上映地区必须是一个数组" })
  @Type(() => String)
  public areas: string[];

  @IsNotEmpty({ message: "上映时长不可以为空" })
  @IsInt({ message: "上映时长必须是一个整数" })
  @Min(1, { message: "上映时长至少为1分钟" })
  @Max(99999, { message: "上映时长过长" })
  @Type(() => Number)
  public timeLong: number;

  @IsNotEmpty({ message: "是否热映不可以为空" })
  @Type(() => Boolean)
  public isHot: boolean = false;

  @IsNotEmpty({ message: "是否是经典影片不可以为空" })
  @Type(() => Boolean)
  public isClassic: boolean = false;

  @IsNotEmpty({ message: "是否即将上映不可以为空" })
  @Type(() => Boolean)
  public isComing: boolean = false;

  @Type(() => String)
  public description?: string;

  @Type(() => String)
  public poster?: string;

  /**
   *将一个平面对象转换成一个Movie类的对象
   * @static
   * @param {object} plainObject 平面对象
   * @returns {Movie}
   * @memberof Movie
   */
  public static transform(plainObject: object): Movie {
    //   if (plainObject instanceof Movie) {
    //     return plainObject;
    //   }
    //   return plainToClass(Movie, plainObject);
    // }

    return this.baseTransform(Movie, plainObject);
  }
}
