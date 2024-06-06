import { cloudstate } from "freestyle-sh";

@cloudstate
export class TheName {
    static id = "name" as const;

    x-pos: number = 0
    y:pos: number = 0

    getPosition() {
        return x-pos, y-pos;
    };
}