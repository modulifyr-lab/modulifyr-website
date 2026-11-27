export interface ReadingProgressInput {
  scrollY: number;
  viewportHeight: number;
  documentScrollHeight: number;
  articleTop?: number;
  articleHeight?: number;
}

/**
 * Computes normalized reading progress in [0, 1] for an article.
 * When article bounds are provided, 100% completes when the end of the article
 * enters the lower reading zone so footers don't distort reading completion.
 */
export function computeReadingProgress({
  scrollY,
  viewportHeight,
  documentScrollHeight,
  articleTop,
  articleHeight,
}: ReadingProgressInput): number {
  const maxDocScroll = Math.max(0, documentScrollHeight - viewportHeight);

  if (
    typeof articleTop === "number" &&
    typeof articleHeight === "number" &&
    articleHeight > 0
  ) {
    const start = 0;
    const articleEndScroll = articleTop + articleHeight - viewportHeight * 0.72;
    const end = Math.min(maxDocScroll, Math.max(1, articleEndScroll));

    if (end <= start) {
      return scrollY > 0 ? 1 : 0;
    }

    const raw = (scrollY - start) / (end - start);
    return Math.max(0, Math.min(1, raw));
  }

  if (maxDocScroll <= 0) {
    return 0;
  }

  return Math.max(0, Math.min(1, scrollY / maxDocScroll));
}

/**
 * Interpolates a color-changing progress bar palette across reading stages:
 * 0.0 -> #2D738D (brand teal)
 * 0.5 -> #409EB7 (bright cyan)
 * 1.0 -> #E8A33D (warm amber)
 */
export function getProgressColor(progress: number): string {
  const clamped = Math.max(0, Math.min(1, progress));

  const stops: readonly [number, number, number][] = [
    [45, 115, 141], // #2D738D
    [64, 158, 183], // #409EB7
    [232, 163, 61], // #E8A33D
  ];

  const scaled = clamped * (stops.length - 1);
  const idx = Math.min(stops.length - 2, Math.floor(scaled));
  const t = scaled - idx;

  const [r1, g1, b1] = stops[idx];
  const [r2, g2, b2] = stops[idx + 1];

  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);

  return `rgb(${r}, ${g}, ${b})`;
}
