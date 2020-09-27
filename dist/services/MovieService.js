"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const db_1 = require("../db");
const Movies_1 = require("../entities/Movies");
const SearchCondition_1 = require("../entities/SearchCondition");
class MovieService {
    static add(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            movie = Movies_1.Movie.transform(movie);
            const errors = yield movie.validateThis();
            if (errors.length > 0) {
                return errors;
            }
            return yield db_1.MovieModel.create(movie);
        });
    }
    static edit(id, movie) {
        return __awaiter(this, void 0, void 0, function* () {
            const movieObj = Movies_1.Movie.transform(movie);
            const errors = yield movieObj.validateThis(true);
            if (errors.length > 0) {
                return errors;
            }
            yield db_1.MovieModel.updateOne({ _id: id }, movie);
            return [];
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.MovieModel.deleteOne({ _id: id });
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.MovieModel.findById({ _id: id });
        });
    }
    static find(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            const conditionObj = SearchCondition_1.SearchCondition.transform(condition);
            const errors = yield conditionObj.validateThis(true);
            if (errors.length > 0) {
                return {
                    count: 0,
                    data: [],
                    errors,
                };
            }
            const movies = yield db_1.MovieModel.find({
                name: { $regex: new RegExp(conditionObj.key) },
            })
                .skip((conditionObj.page - 1) * conditionObj.limit)
                .limit(conditionObj.limit);
            const count = yield db_1.MovieModel.find({
                name: { $regex: new RegExp(conditionObj.key) },
            }).countDocuments();
            return {
                count,
                data: movies,
                errors: [],
            };
        });
    }
}
exports.MovieService = MovieService;
