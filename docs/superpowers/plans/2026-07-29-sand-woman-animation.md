# Sand Woman Animation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full-screen Three.js particle animation in the Hero section: sand pile → female human figure → realistic colored person with breathing/hair micro-motion.

**Architecture:** Three.js WebGL particle system with ~13,500 particles across 3 layers (body, hair, ambient dust). Custom ShaderMaterial drives sand-to-skin color transition. Procedural female body point cloud generation — no external 3D models. Dynamic import with `ssr: false`.

**Tech Stack:** React 18, Next.js 14, TypeScript 5, Three.js, Tailwind CSS 3

## Global Constraints

- TypeScript strict mode throughout
- Three.js dynamically imported (`next/dynamic` with `ssr: false`)
- All Three.js resources disposed on unmount (geometries, materials, renderer, rAF)
- Hero text/CTAs overlay on Three.js canvas; left-column copy preserved; right-side image removed
- Animation plays once on load then enters infinite Phase 4 micro-motion loop
- Dark theme default — canvas background `#0a0a1a`
- Responsive: renderer resizes on window resize

---

## File Map

```
app/
├── components/
│   └── SandWomanHero.tsx    ← Main component (Three.js scene, animation loop)
├── lib/
│   └── sand-woman/
│       ├── pointCloud.ts    ← Procedural female body + sand pile generation
│       └── shaders.ts       ← Vertex/fragment shader GLSL source strings
└── page.tsx                  ← Modified: dynamic import SandWomanHero
```

---

### Task 1: Install Three.js dependency

**Files:**
- Modify: `package.json`

**Interfaces:**
- Produces: `three` ^0.170 and `@types/three` available for import

- [ ] **Step 1: Install packages**

```bash
cd D:/workspace/hanzhangshouzhen && npm install three@latest && npm install -D @types/three@latest
```

- [ ] **Step 2: Verify**

```bash
node -e "const THREE = require('three'); console.log('Three.js r' + THREE.REVISION)"
```
Expected: prints revision number, no errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add three.js for sand woman particle animation

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 2: Create shader definitions

**Files:**
- Create: `app/lib/sand-woman/shaders.ts`

**Interfaces:**
- Produces: `vertexShader: string` — attributes `aSandPosition`(vec3), `aTargetPosition`(vec3), `aRegion`(float); uniforms `uFormProgress`, `uColorMix`, `uTime`, `uChestCenter`(vec3), `uSize`
- Produces: `fragmentShader: string` — circular point, color-mix by region, grain texture

- [ ] **Step 1: Create `app/lib/sand-woman/shaders.ts`**

```typescript
export const vertexShader = /* glsl */ `
attribute vec3 aSandPosition;
attribute vec3 aTargetPosition;
attribute float aRegion;

uniform float uFormProgress;
uniform float uColorMix;
uniform float uTime;
uniform vec3  uChestCenter;
uniform float uSize;

varying float vRegion;
varying float vDistToChest;

void main() {
  // Phase 2: lerp sand → human form
  vec3 basePos = mix(aSandPosition, aTargetPosition, uFormProgress);

  // ---- Breathing (chest region, active after formProgress > 0.7) ----
  float distToChest = distance(aTargetPosition, uChestCenter);
  float breathInfluence = smoothstep(0.55, 0.0, distToChest)
                        * smoothstep(0.7, 1.0, uFormProgress);
  float breathCycle = sin(uTime * 1.57) * 0.025;   // ~4 s period
  vec3 breathOffset = normalize(aTargetPosition - uChestCenter + 0.001) * breathCycle * breathInfluence;

  // ---- Hair sway (region == 2) ----
  float isHair = step(1.5, aRegion) * step(aRegion, 2.5);
  float wave1  = sin(uTime * 2.09 + aTargetPosition.y * 3.0) * 0.04;   // ~3 s
  float wave2  = cos(uTime * 1.80 + aTargetPosition.y * 2.5) * 0.03;
  vec3 hairOffset = vec3(wave1 + wave2, wave1 * 0.3, wave2 * 0.5) * isHair;

  // ---- Body micro-sway (region == 1) ----
  float isBody = step(0.5, aRegion) * step(aRegion, 1.5);
  float swayX   = sin(uTime * 1.26 + aTargetPosition.y * 1.5) * 0.012;  // ~5 s
  float swayZ   = cos(uTime * 1.26 + aTargetPosition.y * 1.5) * 0.008;
  vec3 swayOffset = vec3(swayX, 0.0, swayZ) * isBody;

  // ---- Ambient dust spiral (region == 3) ----
  float isDust = step(2.5, aRegion);
  float spiral = uTime * 0.8 + aTargetPosition.y * 2.0;
  vec3 dustOffset = vec3(cos(spiral) * 0.10, sin(uTime * 0.6 + aTargetPosition.x) * 0.08, sin(spiral) * 0.10) * isDust;

  // Compose
  vec3 finalPos = basePos + breathOffset + hairOffset + swayOffset + dustOffset;

  vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  gl_PointSize = uSize * (280.0 / -mvPosition.z);
  gl_PointSize = clamp(gl_PointSize, 0.4, 5.5);

  vRegion      = aRegion;
  vDistToChest = distToChest;
}
`;

export const fragmentShader = /* glsl */ `
uniform float uColorMix;

varying float vRegion;
varying float vDistToChest;

// Sand palette
const vec3 sandA = vec3(0.761, 0.639, 0.400);  // #c2a366
const vec3 sandB = vec3(0.831, 0.725, 0.584);  // #d4b896
const vec3 sandC = vec3(0.910, 0.835, 0.718);  // #e8d5b7

// Skin
const vec3 skinA = vec3(0.910, 0.722, 0.541);   // #e8b88a
const vec3 skinB = vec3(0.831, 0.584, 0.420);   // #d4956b

// Clothing
const vec3 clothA = vec3(0.165, 0.188, 0.251);  // #2a3040
const vec3 clothB = vec3(0.239, 0.310, 0.373);  // #3d4f5f

// Hair
const vec3 hairA = vec3(0.165, 0.102, 0.039);   // #2a1a0a
const vec3 hairB = vec3(0.102, 0.039, 0.000);   // #1a0a00

void main() {
  vec2  center = gl_PointCoord - 0.5;
  float dist   = length(center);
  if (dist > 0.5) discard;

  float alpha   = 1.0 - smoothstep(0.35, 0.5, dist);
  float variant = sin(gl_PointCoord.x * 11.0 + gl_PointCoord.y * 8.0) * 0.15;

  // Sand base
  vec3 sandColor = mix(sandA, sandB, variant + 0.5);

  // Human color by region
  vec3 humanColor;
  if (vRegion < 0.5)       humanColor = mix(skinA,  skinB,  variant + 0.5);
  else if (vRegion < 1.5)  humanColor = mix(clothA, clothB, variant + 0.5);
  else if (vRegion < 2.5)  humanColor = mix(hairA,  hairB,  variant + 0.5);
  else                     humanColor = mix(sandB,  sandC,  variant + 0.5); // dust stays sandy

  vec3 color = mix(sandColor, humanColor, uColorMix);

  // Film grain
  float grain = fract(sin(dot(gl_PointCoord, vec2(12.9898, 78.233))) * 43758.5453);
  color *= 0.88 + grain * 0.24;

  gl_FragColor = vec4(color, alpha * 0.88);
}
`;
```

- [ ] **Step 2: Commit**

```bash
git add app/lib/sand-woman/shaders.ts
git commit -m "feat: add sand woman GLSL shaders (vertex + fragment)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 3: Create point cloud generator

**Files:**
- Create: `app/lib/sand-woman/pointCloud.ts`

**Interfaces:**
- Produces: `ParticleData { sandPosition: Float32Array; targetPosition: Float32Array; region: Float32Array }`
- Produces: `CHEST_CENTER: [number, number, number]`
- Produces: `generateParticleData(config): ParticleData`

- [ ] **Step 1: Create `app/lib/sand-woman/pointCloud.ts`**

```typescript
import * as THREE from 'three';

export interface ParticleData {
  /** Start position (sand pile) — flat [x,y,z,…] */
  sandPosition: Float32Array;
  /** Target position (human form) — flat [x,y,z,…] */
  targetPosition: Float32Array;
  /** Region per particle: 0=face, 1=body, 2=hair, 3=ambient dust */
  region: Float32Array;
}

/** Chest center in human-form coords — used by shader for breathing. */
export const CHEST_CENTER: [number, number, number] = [0.0, 1.1, 0.0];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Sample vertices from geometry, apply transform, push into output arrays.
 * Generates `count` particles; skips evenly if geometry has more vertices.
 */
function pushSampled(
  geom: THREE.BufferGeometry,
  outTargets: number[],
  outSands: number[],
  outRegions: number[],
  region: number,
  count: number,
  transform: (v: THREE.Vector3) => THREE.Vector3,
): void {
  const pos = geom.getAttribute('position');
  const v = new THREE.Vector3();
  const step = Math.max(1, Math.floor(pos.count / count));
  let pushed = 0;
  for (let i = 0; i < pos.count && pushed < count; i += step) {
    v.fromBufferAttribute(pos, i);
    const tv = transform(v);
    outTargets.push(tv.x, tv.y, tv.z);
    const [sx, sy, sz] = sandPilePosition(tv);
    outSands.push(sx, sy, sz);
    outRegions.push(region);
    pushed++;
  }
}

/**
 * Map a human-form point to its sand-pile start position.
 * Elliptical mound on XZ plane; slight Y height (thicker center).
 */
function sandPilePosition(target: THREE.Vector3): [number, number, number] {
  const sx = target.x * 1.3 + (Math.random() - 0.5) * 0.35;
  const sz = target.z * 1.1 + (Math.random() - 0.5) * 0.25;
  const dist = Math.sqrt((sx / 1.05) ** 2 + (sz / 0.80) ** 2);
  const mound = Math.max(0, 0.14 * (1.0 - dist)) * (0.75 + Math.random() * 0.5);
  const sy = mound + (Math.random() - 0.5) * 0.04;
  return [sx, sy, sz];
}

/* ------------------------------------------------------------------ */
/*  Main generator                                                     */
/* ------------------------------------------------------------------ */

export function generateParticleData(config: {
  bodyCount: number;
  hairCount: number;
  dustCount: number;
}): ParticleData {
  const { bodyCount, hairCount, dustCount } = config;
  const targets: number[] = [];
  const sands: number[] = [];
  const regions: number[] = [];
  const v3 = new THREE.Vector3();

  // ── HEAD (region 0 — face) ──────────────────────────────────────
  {
    const g = new THREE.SphereGeometry(1, 32, 24);
    pushSampled(g, targets, sands, regions, 0, Math.floor(bodyCount * 0.12),
      (v) => new THREE.Vector3(v.x * 0.17, v.y * 0.21 + 1.50, v.z * 0.15));
    g.dispose();
  }

  // ── NECK (region 1 — body) ──────────────────────────────────────
  {
    const g = new THREE.CylinderGeometry(0.06, 0.07, 0.13, 16, 4);
    pushSampled(g, targets, sands, regions, 1, Math.floor(bodyCount * 0.02),
      (v) => new THREE.Vector3(v.x, v.y + 1.32, v.z));
    g.dispose();
  }

  // ── TORSO (region 1) — lathe from hourglass profile ─────────────
  {
    const profile: [number, number][] = [
      [-0.52, 0.17], [-0.42, 0.19], [-0.28, 0.175],
      [-0.10, 0.11], [0.0, 0.105], [0.08, 0.115],
      [0.18, 0.14], [0.24, 0.155], [0.30, 0.15],
      [0.36, 0.13], [0.40, 0.09],
    ];
    const torsoCount = Math.floor(bodyCount * 0.28);
    const rings = 24;
    const segsPerRing = Math.ceil(torsoCount / rings);

    for (let ri = 0; ri < rings; ri++) {
      const t = ri / (rings - 1);
      const h = -0.52 + t * 0.92;
      let radius = 0.1;
      for (let pi = 0; pi < profile.length - 1; pi++) {
        if (h >= profile[pi][0] && h <= profile[pi + 1][0]) {
          const lt = (h - profile[pi][0]) / (profile[pi + 1][0] - profile[pi][0]);
          radius = profile[pi][1] + lt * (profile[pi + 1][1] - profile[pi][1]);
          break;
        }
      }
      const rx = radius;
      const rz = radius * 0.72;
      for (let si = 0; si < segsPerRing; si++) {
        const angle = (si / segsPerRing) * Math.PI * 2 + (Math.random() - 0.5) * 0.12;
        const tx = Math.cos(angle) * rx * (0.82 + Math.random() * 0.36);
        const ty = h + 0.88;
        const tz = Math.sin(angle) * rz * (0.82 + Math.random() * 0.36);
        targets.push(tx, ty, tz);
        const [sx, sy, sz] = sandPilePosition(new THREE.Vector3(tx, ty, tz));
        sands.push(sx, sy, sz);
        regions.push(1);
      }
    }
  }

  // ── LEFT ARM (region 1) ─────────────────────────────────────────
  {
    const g = new THREE.CylinderGeometry(0.045, 0.04, 0.55, 12, 8);
    pushSampled(g, targets, sands, regions, 1, Math.floor(bodyCount * 0.08),
      (v) => {
        const bend = Math.max(0, v.y + 0.27) * 0.18;
        return new THREE.Vector3(-0.22 + bend, v.y + 0.95, v.x * 0.3);
      });
    g.dispose();
  }

  // ── RIGHT ARM (region 1) ────────────────────────────────────────
  {
    const g = new THREE.CylinderGeometry(0.045, 0.04, 0.55, 12, 8);
    pushSampled(g, targets, sands, regions, 1, Math.floor(bodyCount * 0.08),
      (v) => {
        const bend = Math.max(0, v.y + 0.27) * 0.18;
        return new THREE.Vector3(0.22 - bend, v.y + 0.95, v.x * 0.3);
      });
    g.dispose();
  }

  // ── LEFT LEG (region 1) ─────────────────────────────────────────
  {
    const g = new THREE.CylinderGeometry(0.06, 0.055, 0.72, 16, 12);
    pushSampled(g, targets, sands, regions, 1, Math.floor(bodyCount * 0.12),
      (v) => new THREE.Vector3(-0.10, v.y + 0.15, v.x * 0.25));
    g.dispose();
  }

  // ── RIGHT LEG (region 1) ────────────────────────────────────────
  {
    const g = new THREE.CylinderGeometry(0.06, 0.055, 0.72, 16, 12);
    pushSampled(g, targets, sands, regions, 1, Math.floor(bodyCount * 0.12),
      (v) => new THREE.Vector3(0.10, v.y + 0.15, v.x * 0.25));
    g.dispose();
  }

  // ── HAIR (region 2) — behind/around head, flowing down ──────────
  {
    const g = new THREE.SphereGeometry(1, 22, 18, 0, Math.PI * 2, 0, Math.PI * 0.55);
    pushSampled(g, targets, sands, regions, 2, hairCount,
      (v) => new THREE.Vector3(
        v.x * 0.22 + Math.sin(v.y * 4.5) * 0.03,
        v.y * 0.52 + 1.08,
        v.z * 0.12 - 0.05,
      ));
    g.dispose();
  }

  // ── AMBIENT DUST (region 3) — scattered around figure ───────────
  {
    for (let i = 0; i < dustCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.35 + Math.random() * 1.3;
      const height = -0.25 + Math.random() * 2.1;
      targets.push(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      sands.push(
        (Math.random() - 0.5) * 2.6,
        Math.random() * 0.06,
        (Math.random() - 0.5) * 2.1,
      );
      regions.push(3);
    }
  }

  return {
    targetPosition: new Float32Array(targets),
    sandPosition: new Float32Array(sands),
    region: new Float32Array(regions),
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit app/lib/sand-woman/pointCloud.ts
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/sand-woman/pointCloud.ts
git commit -m "feat: add procedural female body point cloud generator

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 4: Create SandWomanHero component

**Files:**
- Create: `app/components/SandWomanHero.tsx`

**Interfaces:**
- Consumes: `generateParticleData`, `CHEST_CENTER` from `@/lib/sand-woman/pointCloud`
- Consumes: `vertexShader`, `fragmentShader` from `@/lib/sand-woman/shaders`
- Produces: default-export React component rendering full-viewport Three.js canvas + Hero text overlay

- [ ] **Step 1: Create `app/components/SandWomanHero.tsx`**

```typescript
'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { generateParticleData, CHEST_CENTER } from '@/lib/sand-woman/pointCloud';
import { vertexShader, fragmentShader } from '@/lib/sand-woman/shaders';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const BODY_COUNT = 10000;
const HAIR_COUNT = 1500;
const DUST_COUNT = 2000;

const PHASE1_END = 2.0;   // sand pile
const PHASE2_END = 5.0;   // rise & form
const PHASE3_END = 8.0;   // humanize (color transition)
// 8.0+ = phase 4 (living, infinite)

/* ------------------------------------------------------------------ */
/*  Easing                                                             */
/* ------------------------------------------------------------------ */

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SandWomanHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    points: THREE.Points;
    material: THREE.ShaderMaterial;
    clock: THREE.Clock;
    animId: number;
    startTime: number;
  } | null>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  /* ---- init ----------------------------------------------------- */
  const init = useCallback(() => {
    const container = containerRef.current;
    if (!container || sceneRef.current) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.zIndex = '0';

    // Scene
    const scene = new THREE.Scene();

    // Camera — start top-down-ish
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 20);
    camera.position.set(0, 2.5, 4.0);
    camera.lookAt(0, 0.3, 0);

    // ---- Particle data -------------------------------------------
    const data = generateParticleData({
      bodyCount: BODY_COUNT,
      hairCount: HAIR_COUNT,
      dustCount: DUST_COUNT,
    });

    const totalParticles = data.region.length;

    // ---- Geometry -------------------------------------------------
    const geometry = new THREE.BufferGeometry();
    // Start all particles at sand positions
    geometry.setAttribute('position',
      new THREE.BufferAttribute(new Float32Array(data.sandPosition), 3));
    geometry.setAttribute('aSandPosition',
      new THREE.BufferAttribute(data.sandPosition, 3));
    geometry.setAttribute('aTargetPosition',
      new THREE.BufferAttribute(data.targetPosition, 3));
    geometry.setAttribute('aRegion',
      new THREE.BufferAttribute(data.region, 1));

    // ---- Material -------------------------------------------------
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uFormProgress: { value: 0 },
        uColorMix: { value: 0 },
        uTime: { value: 0 },
        uChestCenter: { value: new THREE.Vector3(...CHEST_CENTER) },
        uSize: { value: 12.0 },
      },
      depthWrite: false,
      depthTest: false,
      transparent: true,
      blending: THREE.NormalBlending,
    });

    // ---- Points ---------------------------------------------------
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Ambient light (not strictly needed for unlit shader) -----
    // Using ShaderMaterial so no lights required

    // ---- Store refs -----------------------------------------------
    const clock = new THREE.Clock(false);
    sceneRef.current = {
      renderer, scene, camera, points, material, clock,
      animId: 0, startTime: 0,
    };

    // ---- Start loop -----------------------------------------------
    clock.start();
    sceneRef.current.startTime = performance.now() / 1000;
    animate();
  }, []);

  /* ---- animation loop -------------------------------------------- */
  const animate = useCallback(() => {
    const s = sceneRef.current;
    if (!s) return;

    const elapsed = (performance.now() / 1000) - s.startTime;

    // ---- Phase progress -------------------------------------------
    let formProgress = 0;  // 0 = sand, 1 = human form
    let colorMix = 0;      // 0 = sand, 1 = human colors

    if (elapsed < PHASE1_END) {
      // Phase 1: sand pile only
      formProgress = 0;
      colorMix = 0;
    } else if (elapsed < PHASE2_END) {
      // Phase 2: rise into human form
      const t = (elapsed - PHASE1_END) / (PHASE2_END - PHASE1_END);
      formProgress = easeInOutCubic(t);
      colorMix = 0;
    } else if (elapsed < PHASE3_END) {
      // Phase 3: human form + color transition
      formProgress = 1.0;
      const t = (elapsed - PHASE2_END) / (PHASE3_END - PHASE2_END);
      colorMix = easeOutExpo(t);
    } else {
      // Phase 4: living — full human, ongoing micro-motion
      formProgress = 1.0;
      colorMix = 1.0;
    }

    // ---- Update uniforms ------------------------------------------
    s.material.uniforms.uFormProgress.value = formProgress;
    s.material.uniforms.uColorMix.value = colorMix;
    s.material.uniforms.uTime.value = elapsed * 1.0;

    // ---- Camera path (Phase 1-2) ----------------------------------
    const camT = Math.min(1, Math.max(0, (elapsed - 0.3) / (PHASE2_END - 0.3)));
    const camEased = easeInOutCubic(camT);
    s.camera.position.set(
      0,
      2.5 + (1.4 - 2.5) * camEased,
      4.0 + (3.8 - 4.0) * camEased,
    );
    s.camera.lookAt(0, 0.3 + (1.15 - 0.3) * camEased, 0);

    // ---- Render ---------------------------------------------------
    s.renderer.render(s.scene, s.camera);
    s.animId = requestAnimationFrame(animate);
  }, []);

  /* ---- resize ---------------------------------------------------- */
  const onResize = useCallback(() => {
    const s = sceneRef.current;
    const container = containerRef.current;
    if (!s || !container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    s.renderer.setSize(w, h);
    s.camera.aspect = w / Math.max(h, 1);
    s.camera.updateProjectionMatrix();
  }, []);

  /* ---- lifecycle ------------------------------------------------- */
  useEffect(() => {
    init();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      const s = sceneRef.current;
      if (s) {
        cancelAnimationFrame(s.animId);
        s.renderer.dispose();
        s.material.dispose();
        s.points.geometry.dispose();
        if (s.renderer.domElement.parentNode) {
          s.renderer.domElement.parentNode.removeChild(s.renderer.domElement);
        }
        sceneRef.current = null;
      }
    };
  }, [init, onResize]);

  /* ---- render ---------------------------------------------------- */
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'var(--color-bg-secondary, #0a0a1a)' }}
    >
      {/* Three.js canvas container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* Text overlay */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex-1 max-w-[58ch] pt-24 pb-16 md:pt-28 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                background: 'var(--color-card)',
                borderColor: 'rgba(99,102,241,0.25)',
                color: 'var(--color-text-accent)',
              }}
            >
              {siteConfig.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ color: 'var(--color-text)' }}
          >
            {siteConfig.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base md:text-lg mb-8 leading-relaxed max-w-[48ch]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-4 items-start"
          >
            <div className="flex flex-col gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('#contact')}
                className="w-full sm:w-auto px-10 py-3.5 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'var(--color-cta-bg)',
                  boxShadow: '0 4px 14px rgba(99,102,241,0.25)',
                }}
              >
                {siteConfig.hero.primaryCta}
              </button>
              <span className="text-xs text-center sm:text-left" style={{ color: 'var(--color-text-muted)' }}>
                专业对接沟通，快速梳理需求
              </span>
            </div>

            <button
              onClick={() => handleScroll('#projects')}
              className="text-sm font-medium transition-colors duration-200 hover:text-primary flex items-center gap-1.5"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {siteConfig.hero.secondaryCta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/SandWomanHero.tsx
git commit -m "feat: add SandWomanHero — Three.js sand-to-human particle animation

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 5: Update page.tsx with dynamic import

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `SandWomanHero` default export from `@/components/SandWomanHero`
- Produces: unchanged `HomePage` default export (replaces Hero with SandWomanHero)

- [ ] **Step 1: Edit `app/page.tsx`**

Replace the existing `import Hero from './components/Hero'` and `<Hero />` usage with a dynamic import of `SandWomanHero`.

**Before (lines 1-2, 15):**
```typescript
import Navbar from './components/Navbar'
import Hero from './components/Hero'
```
```typescript
        <Hero />
```

**After:**
```typescript
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'

const SandWomanHero = dynamic(() => import('./components/SandWomanHero'), { ssr: false })
```
```typescript
        <SandWomanHero />
```

Full modified file:

```typescript
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SandWomanHero = dynamic(() => import('./components/SandWomanHero'), { ssr: false })

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <SandWomanHero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Build check**

```bash
cd D:/workspace/hanzhangshouzhen && npx next build 2>&1 | tail -30
```
Expected: successful build, no TypeScript or Webpack errors.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: integrate SandWomanHero via dynamic import, replacing static Hero

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 6: Verify and polish

- [ ] **Step 1: Run dev server and spot-check**

```bash
cd D:/workspace/hanzhangshouzhen && npm run dev
```

Open `http://localhost:3000` and verify:
- Page loads without errors (no white screen)
- Three.js canvas visible in Hero area (dark background with particles)
- Sand pile visible initially (flat-ish particle distribution at bottom)
- Particles rise into female human silhouette over ~5 seconds
- Color transitions from sand tones to skin/clothing/hair colors over ~8 seconds
- After 8 seconds, breathing motion and hair sway visible
- No console errors
- Window resize works (canvas fills hero area)

- [ ] **Step 2: Fix any issues found, then final commit**

```bash
git add -A
git commit -m "chore: final polish for sand woman animation

Co-Authored-By: Claude <noreply@anthropic.com>"
```
