const verticalthumbs = import.meta.glob('../assets/images/Thumbs/Verts/*.{jpg,jpeg,png,webp}', { eager: true });
export const vertst = Object.values(verticalthumbs).map(m => m.default);

const verticalfulls = import.meta.glob('../assets/images/Fulls/Verts/*.{jpg,jpeg,png,webp}', { eager: true });
export const vertsf = Object.values(verticalfulls).map(m => m.default);

const horizontalthumbs = import.meta.glob('../assets/images/Thumbs/Horiz/*.{jpg,jpeg,png,webp}', { eager: true });
export const horizst = Object.values(horizontalthumbs).map(m => m.default);

const horizontalfulls = import.meta.glob('../assets/images/Fulls/Horiz/*.{jpg,jpeg,png,webp}', { eager: true });
export const horizsf = Object.values(horizontalfulls).map(m => m.default);