//查询结果(电影、用户、影院等) -公共类型
export interface ISearchResult<T> {
  count: number; //查询总数
  data: T[]; //查询数据
  errors: string[]; //查询错误
}
