import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
};

export const Scene01TitleIgnition = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  const sceneOpacity = interpolate(frame, [0, 6, 62, 71], [0, 1, 1, 0], clamp);
  const sceneBlur = interpolate(frame, [0, 8, 63, 71], [22, 0, 0, 18], clamp);
  const sceneScale = interpolate(frame, [0, 56, 71], [0.98, 1.02, 1.05], clamp);

  const leftOrbX = interpolate(frame, [0, 71], [-60, 34], clamp);
  const rightOrbX = interpolate(frame, [0, 71], [40, -22], clamp);
  const bandShiftA = interpolate(frame, [0, 71], [-120, 90], clamp);
  const bandShiftB = interpolate(frame, [0, 71], [110, -70], clamp);

  const lineStyle = (start, distance, baseScale = 0.94) => ({
    opacity: interpolate(frame, [start, start + 8], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + 10], [distance, 0], clamp)}px) scale(${interpolate(frame, [start, start + 10], [baseScale, 1], clamp)})`,
    filter: `blur(${interpolate(frame, [start, start + 10], [18, 0], clamp)}px)`,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#f7ecda',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: sceneOpacity,
          filter: `blur(${sceneBlur}px)`,
          transform: `scale(${sceneScale})`,
        }}
      >
        <AbsoluteFill
          style={{
            background: 'linear-gradient(180deg, #fbf3e6 0%, #f6e8d1 58%, #f3e0bf 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: -160,
            background: 'radial-gradient(circle at 50% 40%, rgba(255,248,232,0.96) 0%, rgba(255,230,180,0.54) 24%, rgba(245,196,102,0.20) 48%, rgba(247,236,218,0) 76%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: -width * 0.14 + leftOrbX,
            top: -height * 0.06,
            width: width * 0.72,
            height: height * 0.95,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,216,122,0.42) 0%, rgba(255,216,122,0.12) 42%, rgba(255,216,122,0) 72%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: -width * 0.12 + rightOrbX,
            bottom: -height * 0.18,
            width: width * 0.64,
            height: height * 0.84,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,238,190,0.78) 0%, rgba(255,220,132,0.18) 44%, rgba(255,220,132,0) 74%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: -220 + bandShiftA,
            top: height * 0.08,
            width: width * 1.25,
            height: 180,
            borderRadius: 999,
            transform: 'rotate(-14deg)',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,247,220,0.16) 22%, rgba(255,212,120,0.28) 50%, rgba(255,247,220,0.12) 76%, rgba(255,255,255,0) 100%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: -180 + bandShiftB,
            bottom: height * 0.12,
            width: width * 1.18,
            height: 140,
            borderRadius: 999,
            transform: 'rotate(12deg)',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,244,210,0.10) 20%, rgba(255,196,92,0.22) 50%, rgba(255,244,210,0.08) 80%, rgba(255,255,255,0) 100%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 120px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 1600,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 10,
            }}
          >
            <div
              style={{
                ...lineStyle(0, 28, 0.96),
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 800,
                fontSize: 72,
                lineHeight: 0.92,
                letterSpacing: '-0.05em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
              }}
            >
              Introducing
            </div>

            <div
              style={{
                ...lineStyle(8, 34, 0.94),
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 900,
                fontSize: 134,
                lineHeight: 0.9,
                letterSpacing: '-0.075em',
                color: '#101722',
                textShadow: '0 8px 34px rgba(255,255,255,0.20)',
              }}
            >
              The AI Workflow
            </div>

            <div
              style={{
                ...lineStyle(16, 42, 0.93),
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 900,
                fontSize: 162,
                lineHeight: 0.88,
                letterSpacing: '-0.085em',
                color: '#0b1320',
                textShadow: '0 10px 40px rgba(255,255,255,0.24)',
              }}
            >
              Builder
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.03) 32%, rgba(255,210,110,0.07) 100%)',
            mixBlendMode: 'screen',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};