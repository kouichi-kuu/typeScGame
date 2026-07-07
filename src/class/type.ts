export type Point3D = {
    x: number;
    y: number;
    z: number;
};

export type Point2D = Omit<Point3D, "z">;

export type Size = Omit<Point3D, "z">;

export type GameObjectParams = {
    element: HTMLElement;
    position: Point2D;
    size?: Size;
};