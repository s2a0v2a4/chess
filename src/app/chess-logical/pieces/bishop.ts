import { Color, Coords, FENChar } from "../models";
import { Piece } from "./piece";

export class Bishop extends Piece {

    protected override _FENChar: FENChar;
    protected override _directions: Coords[];

    constructor(color: Color) {
        super(color);
        this._FENChar = color === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
        this._directions = [
            { x: 1, y: 1 },
            { x: 1, y: -1 },
            { x: -1, y: 1 },
            { x: -1, y: -1 }
        ];
    }
}