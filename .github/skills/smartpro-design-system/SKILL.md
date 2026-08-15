---
name: smartpro-design-system
description: 'Use when adding, redesigning, or reviewing landing-page sections, components, forms, cards, CTAs, or responsive layouts for SmartPro. Applies the established premium kitchen design system: typography, palette, spacing, component tokens, and section rhythm.'
argument-hint: 'Describe the new section, user goal, content, and available media'
user-invocable: true
---

# SmartPro Design System

Create new SmartPro landing-page sections that feel like part of the existing premium kitchen experience. The visual language is warm, editorial, precise, and conversion-focused: ivory surfaces, charcoal contrast, olive as the brand anchor, with restrained green and gold accents.

## Source Of Truth

- Tech: Next.js App Router, React, Tailwind CSS v4, Framer Motion, and Lucide icons.
- Fonts: `font-serif` is Playfair Display for display headings. The default sans font is Geist.
- Main content container: `mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12`.
- Do not introduce a new font, color family, component library, or design direction without an explicit request.
- Reuse local assets from `public/images` or `public/videos` before remote placeholders. All meaningful images need an accurate Spanish `alt`.

## Design Tokens

### Color

| Role | Tailwind value |
| --- | --- |
| Ink / dark surface | `#121212` |
| Brand olive | `#6b705c` |
| Primary CTA apple green | `#65a30d` (hover `#4d7c0f`) |
| Olive highlight | `#8f9a68` |
| Warm gold | `#968a64` or `#c4a574` |
| Ivory surface | `#fcfaf7` |
| Warm neutral surface | `#f7f4ee` |
| Strong text | `#2a2a2a` or `#121212` |
| Secondary text | `text-neutral-600` or `text-neutral-700` |
| Border | `border-[#e6e1d6]` or `border-[#e8e3dd]` |
| Success accent | `#2f7a3a` with `bg-[#b8e0b0]` |

Use apple green only for primary conversion actions and positive states. Use gold and olive for emphasis, metadata, and decorative accents. Do not add gradients, bright colors, or colored glows just to decorate an otherwise empty area.

### Radius, Borders, Shadows, And Motion

- Small controls, icon buttons, and pills: `rounded-full`.
- Inputs, selectable options, and compact panels: `rounded-xl` or `rounded-2xl`.
- Cards and media frames: `rounded-2xl`; use `rounded-[20px]` only for a large media frame. Do not use `rounded-3xl` or values above 20px for new work.
- Default border: `border border-[#e6e1d6]` on light surfaces and `border-white/10` on dark ones.
- Elevated card: `shadow-[0_18px_50px_rgba(34,34,34,0.06)]`.
- Prominent media: `shadow-[0_20px_60px_rgba(42,42,42,0.15)]`.
- Primary CTA: `bg-[#65a30d]`, `hover:bg-[#4d7c0f]`, and `shadow-[0_10px_30px_rgba(101,163,13,0.32)]`.
- Interactive elements use `transition-all duration-200`, `hover:scale-[1.02]`, and `active:scale-[0.98]`. Do not animate layout dimensions or use perpetual animation except for a media play affordance.

## Typography

Use the following exact hierarchy. Avoid negative tracking; body text should remain comfortably readable.

| Element | Classes |
| --- | --- |
| Kicker / badge | `inline-flex items-center gap-2 rounded-full border border-[#c4b896] px-4 py-[7px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#8f9a68]` |
| H1 dark hero | `font-serif text-[44px] font-medium leading-[1.18] text-white sm:text-[52px] lg:text-[60px]` |
| H1 light hero | `font-serif text-[44px] font-medium leading-[1.18] text-[#2a2a2a] sm:text-[52px] lg:text-[60px]` |
| H2 | `font-serif text-[36px] font-medium leading-[1.2] text-[#2a2a2a] sm:text-[42px] lg:text-[48px]` |
| H3 | `text-[24px] font-medium leading-tight text-[#2a2a2a]` |
| Lead paragraph | `text-[17px] leading-[1.8] text-neutral-700` |
| Secondary paragraph | `text-sm leading-relaxed text-neutral-600` |
| Meta / label | `text-[11px] font-medium uppercase tracking-[0.18em] text-[#8f9a68]` |

Highlight no more than one meaningful phrase in a heading with `text-[#8f9a68]` or `text-[#c4a574]`. A section should have one H2, in semantic order after the page H1.

## Layout And Spacing

- Standard section: `py-16 sm:py-20 lg:py-24`.
- Compact utility section: `py-12 sm:py-16`.
- Full viewport conversion section: `min-h-dvh py-10 sm:py-16`.
- Heading to lead: `mt-6`; kicker to heading: `mt-6` or `mt-8`; lead to CTA: `mt-8`; CTA to supporting detail: `mt-8` or `mt-10`.
- Two-column editorial layout: `grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16`.
- Centered editorial intro: `mx-auto max-w-[760px] text-center`.
- Long-form text column: `max-w-[560px]`; focused form: `max-w-2xl`; media: `max-w-[500px]`.
- Cards use `p-6 sm:p-8`; project cards use `p-4` around media and `p-6` for their content.
- Use stable `aspect-*`, `min-h-*`, and grid tracks for media and interactive controls so their layout does not shift.

## Atomic Components

### Primary CTA

Use an icon from `lucide-react` when it clarifies the action. The text must describe the command.

```tsx
<button className="group inline-flex items-center gap-3 rounded-full bg-[#65a30d] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98]">
  Solicitar asesoria
  <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
</button>
```

For a hero CTA, `px-8 py-4 text-[16px]` is allowed. Use exactly one primary CTA per section.

### Secondary CTA And Icon Button

```tsx
<button className="inline-flex items-center gap-2 rounded-full border border-[#d8d2c6] bg-white px-5 py-2.5 text-sm font-medium text-[#121212] transition-all duration-200 hover:scale-[1.02] hover:border-[#968a64] hover:bg-[#fcfaf7] active:scale-[0.98]">
  Conocer proyectos
</button>

<button aria-label="Siguiente proyecto" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d0c3] bg-white/80 text-[#2a2a2a] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#b8b09c] hover:bg-white active:scale-[0.98]">
  <ArrowRight className="h-4 w-4" />
</button>
```

### Card, Input, And Selectable Option

```tsx
<article className="overflow-hidden rounded-2xl border border-[#e6e1d6] bg-white shadow-[0_18px_50px_rgba(34,34,34,0.06)]">
  <div className="p-6 sm:p-8">...</div>
</article>

<input className="w-full rounded-2xl border border-[#e6e1d6] bg-white px-4 py-3.5 text-[#121212] outline-none transition placeholder:text-neutral-400 focus:border-[#6b705c] focus:ring-2 focus:ring-[#6b705c]/20" />
```

Use the selected state for choice cards: `border-[#6b705c] bg-[#6b705c]/10 shadow-[0_0_0_1px_rgba(107,112,92,0.2)]`. Inputs, controls, and selectable rows must have a visible focus state, a disabled state when relevant, and labels associated to form fields.

## Rhythm And Contrast

Maintain contrast and alternate the composition across adjacent sections. A recommended sequence after the dark image-led hero is:

1. `bg-[#fcfaf7]`: editorial two-column explanation, with one real image or video.
2. `bg-[#f7f4ee]`: centered portfolio, gallery, or horizontally browsable proof.
3. Image-backed or `bg-[#121212]`: high-intent form or final conversion action.

Never place two white/light editorial two-column sections consecutively. Do not repeat the exact same heading alignment or card grid in neighboring sections. Alternate among two-column editorial content, centered proof, list/process, gallery, and conversion form. Preserve a clear visual rest area: each section needs one primary focal point, not a card inside a card or multiple decorative layers.

## Build Procedure

1. Read the nearest existing section and `app/globals.css`; keep the established container, font, color, and responsive conventions.
2. State the section's user goal, primary CTA, and where it sits in the background/layout rhythm before coding.
3. Select one allowed background and one layout that differs from its neighboring sections.
4. Implement semantic HTML with the typography, spacing, component tokens, and responsive constraints above. Use Lucide icons, not hand-drawn SVG icons.
5. Use a real local image/video where media strengthens the story. Never ship a placeholder, emoji, or explanatory in-app note.
6. Use Framer Motion only for a concise entrance or state transition, respecting reduced-motion behavior when adding new animations.
7. Run `npm run lint` after implementation. For visual work, start the development server and inspect desktop and mobile layouts before completion.

## Quality Checklist

- One H2, a concise supporting paragraph, and one primary CTA at most.
- Correct background rhythm and a layout variation from adjacent sections.
- Exact token values are reused; no new arbitrary color, radius, shadow, or type scale.
- Buttons, fields, and navigation controls have hover, focus, active, and disabled states when applicable.
- Text does not overflow at mobile or desktop widths; images have stable aspect ratios and descriptive alt text.
- No nested cards, visual placeholder, decorative orb, or generic gradient-only hero.