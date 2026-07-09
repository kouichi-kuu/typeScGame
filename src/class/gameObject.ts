import { Point2D, Size, GameObjectParams } from "../utility/type.js";

export default class GameObject {
    protected readonly _element: HTMLElement;
    protected readonly _size: Size;
    protected _position: Point2D;
    protected readonly _timerId: number;
}