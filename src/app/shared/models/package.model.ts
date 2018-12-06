import { Color } from "three";

export class Package {
    constructor(
        public width: number,
        public height: number,
        public depth: number,
        public color: Color,
        public secondaryColor: Color
    ) { }

    updateColor(color: string) {
        this.color = new Color(color);
    }

    updateSecondaryColor(color: string) {
        this.secondaryColor = new Color(color);
    }
}