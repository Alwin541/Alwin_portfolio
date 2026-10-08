# Design System — Alwin Joseph Portfolio

## Aesthetic Direction: Morflax-Style (Soft 3D, Playful, Polished)
This portfolio site is inspired by the Morflax aesthetic—combining modern software engineering polish with tactile, soft 3D visual delight.

### Core Visual Principles
1. **Soft Glossy 3D Look**:
   - Tactile depth with layered multi-stop drop shadows (`rgba(124, 92, 255, 0.08)` and `rgba(20, 18, 58, 0.04)`).
   - High corner radii: `rounded-3xl` (28px) and `rounded-[32px]` / `rounded-[36px]`.
   - Glossy card treatments with translucent borders (`border-white/80`) and frosted glass blurs.

2. **Color Palette**:
   - **Background**: Soft off-white `#F7F5FF`
   - **Primary Text**: Deep navy `#14123A`
   - **Muted Text**: Navy shades `#433C85` to `#857DC2`
   - **Signature Accent Gradient**: Purple `#7C5CFF` → Blue `#4F8BFF` → Pink `#FF7AC6`
   - **Surface**: Crisp white `#FFFFFF` cards with soft glow undertones

3. **Typography**:
   - **Headings**: Plus Jakarta Sans (bold, geometric, friendly)
   - **Body & Chips**: Inter (high legibility, neutral)

4. **3D Elements & Hero Visual**:
   - Lightweight inline SVG shapes with multi-stop radial and linear gradients:
     - 3D Glossy Sphere with specular highlight
     - 3D Torus ring with iridescent gradient lighting
     - 3D Isometric Rounded Cube with multi-faceted depth
   - Pure CSS float animations without heavy 3D engine overhead.

5. **Motion & Accessibility**:
   - Subtle scroll reveals powered by Framer Motion.
   - Hover lift interactions (`translateY(-4px)`).
   - Strict adherence to `prefers-reduced-motion` to disable transforms and animations for sensitive users.
   - Semantic HTML and keyboard focus rings.
