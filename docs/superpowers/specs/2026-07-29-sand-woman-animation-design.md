# Sand Woman Animation — Design Spec

**Date:** 2026-07-29
**Status:** Approved
**Project:** 上海含章收珍软件科技 公司主页 Hero 区域

## Overview

Replace the current Hero section gradient text with a full-screen Three.js particle animation: a pile of sand rises, forms a female human figure, then transitions into a realistic colorful person with ongoing subtle motion.

## Tech Stack Addition

- **three** (npm) — WebGL 3D library for particle rendering
- **@types/three** — TypeScript types

## Animation Timeline

| Phase | Time | Description |
|-------|------|-------------|
| Phase 1 — Sand Pile | 0–2s | Particles flat on ground in elliptical pile, sand colors, random micro-jitter |
| Phase 2 — Rise & Form | 2–5s | Particles lerp from sand-pile positions to human point-cloud targets. Camera rotates from top-down to eye-level. Lower body settles first, head last |
| Phase 3 — Humanize | 5–8s | Shader-driven color transition: sand tones → skin/clothing/hair colors. Particle spacing tightens |
| Phase 4 — Living | 8s+ | Breathing chest rise/fall, hair swaying, body micro-sway, ambient dust orbiting |

## Particle System Layers

| Layer | Count | Purpose |
|-------|-------|---------|
| Body particles | ~10,000 | Core female figure |
| Hair particles | ~1,500 | Long hair to shoulder blades, independent sway physics |
| Ambient dust | ~2,000 | Floating sand/dust orbiting the figure |

## Female Body Point Cloud

Generated at init by sampling vertices from compound 3D geometry:
- **Head:** Slightly ellipsoid sphere
- **Hair:** Extended geometry falling to shoulder-blade level
- **Torso:** Hourglass curve (chest-waist-hip)
- **Arms:** Cylinders, relaxed at sides, slight bend
- **Legs:** Cylinders, standing pose

## Phase 4 Micro-Animations

| Effect | Implementation |
|--------|---------------|
| Breathing | Chest-region particles expand/contract on sine wave (~4s period), amplitude decays with distance from chest center |
| Hair sway | Hair particles follow wave motion along Y, phase-offset by height (~3s period) |
| Body sway | Full-body low-frequency low-amplitude sine displacement (~5s period) |
| Dust orbit | Ambient particles spiral upward around figure with random perturbations |

## Shader Color Transition

Controlled via `uColorMix` uniform (0.0 = sand, 1.0 = human colors):

- Face region: sand → warm skin tone (#e8b88a / #d4956b)
- Body region: sand → deep blue-gray clothing (#2a3040 / #3d4f5f)
- Hair region: sand → dark brown/black (#2a1a0a / #1a0a00)

## Camera Path

- Start: (0, 2.5, 4.0) looking at ground-level sand pile
- End: (0, 1.4, 3.8) looking at face level
- Easing: easeInOutCubic

## Technical Architecture

```
app/components/SandWomanHero.tsx   — Main component (client-side, dynamic import)
  ├── Three.js Scene setup
  ├── Point cloud generation (init)
  ├── Custom ShaderMaterial
  ├── Animation loop (rAF)
  └── Camera controller
```

### Key Implementation Details

- **Dual position buffers:** `sandPosition` (initial) + `targetPosition` (human form), lerp between them during Phase 2
- **Region masks:** Vertex attribute `aRegion` (0=face, 1=body, 2=hair, 3=ambient) for color targeting
- **Dynamic import:** `next/dynamic` with `ssr: false` to avoid SSR issues with Three.js
- **No external 3D models:** All geometry generated procedurally in code
- **Cleanup:** Dispose all geometries, materials, and renderer on unmount

## Files to Create/Modify

| File | Action |
|------|--------|
| `app/components/SandWomanHero.tsx` | Create — Main animation component |
| `app/page.tsx` | Modify — Replace Hero with SandWomanHero |
| `package.json` | Modify — Add three dependency |

## Success Criteria

- [ ] Animation plays automatically on page load
- [ ] Three distinct phases visible (sand → form → human)
- [ ] Female body proportions recognizable in silhouette
- [ ] Breathing and hair motion visible after Phase 3
- [ ] 60fps on modern hardware
- [ ] No SSR errors (dynamic import works)
- [ ] Responsive to viewport resizing
