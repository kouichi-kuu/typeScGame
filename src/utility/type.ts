export type Point3D = {
  x: number;
  y: number;
  z: number;
};

export type Point2D = Omit<Point3D, "z">;

export type Size = Omit<Point3D, "z">;

export type TextObjectParams = {
  position: Point2D;
  fontName: string;
  fontSize: number;
  text?: string;
};

export type ScoreParams = Omit<TextObjectParams, "text"> & {
  score: number;
};

export type GameObjectParams = {
  element: HTMLElement;
  position: Point2D;
  size?: Size;
};

export type MovableObjectParams = {
  element: HTMLElement;
  position: Point2D;
  size: Size;
  velocity: Point2D;
  acceleration: Point2D;
};
