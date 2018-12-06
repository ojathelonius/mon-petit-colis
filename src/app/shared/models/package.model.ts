import { Color } from "three";

export class Package {
    constructor(
        public width: number,
        public height: number,
        public depth: number,
        public color: Color
    ) { }

    updateColor(color: string) {
        this.color = new Color(color);
    }
}