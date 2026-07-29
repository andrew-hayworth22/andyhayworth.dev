import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

export const measurementId = env.PUBLIC_GA_MEASUREMENT_ID;

// Checks that the tag should be rendered - determined at compile-time, allowing
// us to prerender the script tag
export const configured = Boolean(import.meta.env.PROD && measurementId);

// Whether gtag() commands can actually be queued - determined at runtime on client.
export const enabled = configured && browser;

export const gtag: (...args: unknown[]) => void = function() {
    if (!enabled) return;

    window.dataLayer = window.dataLayer || [];

    // Must push the `arguments` object, not a rest-param array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
};
