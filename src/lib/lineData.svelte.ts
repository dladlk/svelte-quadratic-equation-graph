import { extent } from "d3-array";
import { scaleLinear } from "d3-scale";
import { line, curveBasis } from "d3-shape";

const maxX = 20;

function buildData(a: number, b: number, c: number) {
    return Array.from(Array(maxX).keys()).map((x) => ({
        x,
        y: formula(x, a, b, c),
    }));
};

function formula(x: number, a: number, b: number, c: number): number {
    const res = a * x * x + b * x + c;
    return res;
}
export function getData(a: number, b: number, c: number) {
    return buildData(a, b, c);
}

export function buildPathLine(data: { x: number; y: number }[]) {
    const xScale = scaleLinear()
        .domain(extent(data.map((d) => d.x)))
        .range([5, 95]);
    const yScale = scaleLinear()
        .domain(extent(data.map((d) => d.y)))
        .range([95, 5]);

    return line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(curveBasis);
}
