import { Plugin } from 'vite';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

export default function webpPlugin(): Plugin {
  return {
    name: 'vite-plugin-webp',
    async generateBundle(options, bundle) {
      for (const key in bundle) {
        if (bundle[key].type === 'asset' && /\.(jpe?g|png)$/.test(key)) {
          const image = bundle[key];
          if (image.source instanceof Uint8Array) {
            const webpBuffer = await sharp(image.source)
              .resize({ width: 1920, withoutEnlargement: true }) // Resize images to a max width of 1920px
              .webp({ quality: 80 }) // Set WebP quality
              .toBuffer();
            const webpKey = key.replace(/\.(jpe?g|png)$/, '.webp');
            this.emitFile({
              type: 'asset',
              fileName: webpKey,
              source: webpBuffer,
            });
          }
        }
      }
    },
  };
}
