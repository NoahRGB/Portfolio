
import {useState,  useEffect, useRef } from "react";

import { Vec2, Circle, Rect, fill, stroke, noStroke, noFill, rad, background, line, quadratic } from "@/app/canvas-utilities";


export default function Canvas() {
    const canvasRef = useRef(null);

    let mouseX = 0; let mouseY = 0;

    const mouseMove = e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    useEffect(() => {
        const targetFPS = 60;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let bgCol = "#2e2e2e";
        let light = new Circle(new Vec2(700, 800), 50);
        let objects = [new Circle(new Vec2(canvas.width - 300, 300), 100)];

        const loop = () => {
            background(ctx, bgCol);
            
            light.pos.x = mouseX;
            light.pos.y = mouseY;


            fill(ctx, "white");
            stroke(ctx, bgCol);
            light.draw(ctx);

            for (let object of objects) {
                stroke(ctx, bgCol);
                object.draw(ctx);
            }

            for (let i = 0; i < 360; i += 3) {
                let edgePoint = new Vec2(light.pos.x + light.radius * Math.cos(rad(i)), light.pos.y + light.radius * Math.sin(rad(i)));
                let dir = new Vec2(edgePoint.x - light.pos.x, edgePoint.y - light.pos.y);
                dir.normalise();

                let hitObject = false;
                stroke(ctx, "yellow");

                for (let object of objects) {
                    let hit = object.hit(edgePoint, dir);
                    if (hit) {
                        hitObject = true;
                        line(ctx, edgePoint, new Vec2(edgePoint.x + dir.x * hit[0], edgePoint.y + dir.y * hit[0]));
                        // object.draw(ctx);
                    }
                }

                if (!hitObject) {
                    line(ctx, edgePoint, new Vec2(edgePoint.x + dir.x * canvas.width*1.5, edgePoint.y + dir.y * canvas.height*1.5));
                }

            }

            
            window.requestAnimationFrame(loop);
        }

        loop();

    }, []);

    return (
        <canvas onMouseMove={mouseMove} ref={canvasRef}></canvas>
    );
}