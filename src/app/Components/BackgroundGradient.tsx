"use client"

import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

function BackgroundGradient() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    useEffect(() => {

        if (!canvasRef.current)
            return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            "colors": [
        {
            "color": "#87CEEB",
            "enabled": true
        },
        {
            "color": "#EDEADE",
            "enabled": true
        },
        {
            "color": "#FAF9F6",
            "enabled": true
        },
        {
            "color": "#F0E8FF",
            "enabled": true
        },
        {
            "color": "#B59BA2",
            "enabled": false
        }
        ],
        "speed": 4,
        "horizontalPressure": 4,
        "verticalPressure": 5,
        "waveFrequencyX": 2,
        "waveFrequencyY": 3,
        "waveAmplitude": 5,
        "shadows": 0,
        "highlights": 2,
        "colorBrightness": 1,
        "colorSaturation": 1,
        "wireframe": false,
        "colorBlending": 6,
        "backgroundColor": "#003FFF",
        "backgroundAlpha": 1,
        "resolution": 1
        });

        return gradientRef.current.destroy;

    }, [canvasRef.current]);


  return (

    <canvas
            className="-z-10 absolute "
            style={{
                isolation: "isolate",
                height: "100%",
                width: "100%",
                top: "0"
            }}
            ref={canvasRef}
        />
    
  )
}

export default BackgroundGradient