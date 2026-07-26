import GameObject from "../class/gameObject.js";
import { Point2D } from "./type.js";
import Screen from "../class/screen.js";

/**
 * createElementメソッド引数の型
 */
type createElementOptions = {
    name: string;
    attr?: Record<string, string>;
};

/**
 * 共通関数
 */
export namespace Util {
    /**
     * HTML要素生成
     * @param name     タグの名前
     * @param attr     属性
     * @returns HTMLElement オブジェクト
     */
    export const createElement = ({ name, attr }: createElementOptions): HTMLElement => {
        // 空のHTML要素を生成
        const element = document.createElement(name);
        // 属性が指定されていれば追加
        if (typeof attr !== "undefined") {
            let key: keyof typeof attr;
            for (key in attr) {
                const value = attr[key];
                element.setAttribute(key, value);
            }
        }
        // 生成した要素を返す
        return element;
    };
}