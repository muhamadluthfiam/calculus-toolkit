import { add, subtract, multiply, divide } from 'numeric-toolkit';

// Turunan (derivatif)
export const derivative = (func, x, dx = 0.0001) => {
    const x1 = add(x, dx);
    const y1 = func(x1);
    const y = func(x);
    const slope = divide(subtract(y1, y), dx);
    return slope;
};

// Integral
export const integral = (func, a, b, dx = 0.0001) => {
    let area = 0;
    for (let x = a; x < b; x = add(x, dx)) {
        const height = func(x);
        const width = dx;
        area = add(area, multiply(height, width));
    }
    return area;
};
