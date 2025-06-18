 export class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    normalise() {
        let len = this.size();
        this.x = this.x / len;
        this.y = this.y / len;
    }

    dot(other) {
        return this.x * other.x + this.y * other.y;
    }

    size() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

export class Circle {
    constructor(pos, radius) {
        this.pos = pos
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fill(); 
        ctx.stroke();
    }

    hit(rayOrigin, rayDir) {
        let t0 = -999; let t1 = -999;
        let l = new Vec2(rayOrigin.x - this.pos.x, rayOrigin.y - this.pos.y);
        let a = rayDir.dot(rayDir);
        let b = 2 * rayDir.dot(l);
        let c = l.dot(l) - (this.radius * this.radius);
        
        let temp = quadratic(a, b, c);

        if (!temp) {
            return false;
        } else {
            t0 = temp[0]; t1 = temp[1];
        }

        if (t0 < 0) {
            t0 = t1;
            if (t0 < 0) return false;
        }

        return [t0, t1];
    }
};

export class Rect {
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
    }
}

export const fill = (ctx, col) => { ctx.fillStyle = col; }
export const stroke = (ctx, col) => { ctx.strokeStyle = col; }
export const rad = deg => { return deg * (Math.PI / 180); }
export const background = (ctx, col) => {
    fill(ctx, col);
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
}

export const line = (ctx, start, end) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

export const quadratic = (a, b, c) => {
    let discriminant = (b * b) - (4 * a * c);
    if (discriminant < 0) return false;
    if (discriminant == 0) return [-0.5 * b / a, -0.5 * b / a];
    let q = (b > 0) ? -0.5 * (b + Math.sqrt(discriminant)) : -0.5 * (b - Math.sqrt(discriminant));
    let sols = [q/a, c/q];
    if (sols[0] > sols[1]) {
        let temp = sols[0];
        sols[0] = sols[1];
        sols[1] = temp;
    }
    return sols;
}
