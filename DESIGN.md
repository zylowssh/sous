# Sous Design System

This file captures the established visual language already shipping in the React application.

## Visual Direction

Sous is a warm bistro identity with confident menu-board typography, food-led imagery, print-like compositions, and a restrained handwritten accent. Existing artwork references in `references/` remain the source of truth for the editorial routes.

## Color

- Cream `#F4EFE5`: primary page ground.
- Paper `#FDFAF3`: elevated and editorial surfaces.
- Ink `#171310`: primary text.
- Coal `#0E0C0A`: dark sections.
- Flame `#E4572E`: tomato-orange brand accent.
- Olive `#CFCAAD`: warm secondary ground.
- Butter `#EEC461`: small highlights and annotations.

Neutrals stay warm and tinted. Flame is a committed identity color, not a decorative gradient.

## Typography

- Anton: display headlines and short menu-board labels.
- Caveat: one handwritten annotation per view at most.
- Inter: body copy and controls.
- Georgia: occasional editorial quotations.

Headings use strong scale contrast and compact leading. Body copy remains readable and generally below 75 characters per line.

## Brand Assets

- `/brand/sous-logo.svg`: canonical full Sous wordmark.
- `/brand/sous-icon.svg`: canonical two-stroke steam mark for icon-only contexts.
- `/brand/sous-loader.svg`: loading feedback only, never a substitute for the logo.

The full wordmark must be used in branded mastheads, faux site headers, and CTA signatures. The steam mark is reserved for compact icon treatments.

## Composition

- Alternate full-bleed cream, olive, paper, coal, and flame sections.
- Use asymmetric layouts and decisive food or restaurant imagery.
- Keep one dominant headline and at most one handwritten aside per view.
- Avoid decorative fake navigation and browser chrome unless it is essential to explaining a real interactive preview.
- Do not use nested cards, gradient text, or decorative glass panels.

## Motion and Interaction

Animate opacity and transforms only, with smooth ease-out timing. Respect `prefers-reduced-motion`. Buttons and links must have explicit destinations or actions; visible labels must not determine application behavior.

## Responsive Behavior

Editorial artwork scales as a 1440px artboard on desktop and becomes native responsive content below 1024px. Navigation, sticky sections, CTAs, and interactive examples must remain operable by keyboard and touch.

## Copy

French copy is calm, direct, and warm. Avoid em dashes and exaggerated claims. The validation step must never be obscured.
