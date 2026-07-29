import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

export const measurementId = env.PUBLIC_GA_MEASUREMENT_ID;

export const enabled = Boolean(import.meta.env.PROD && browser && measurementId);

export function gtag(...args: unknown[]) {
    if (!enabled) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
}
