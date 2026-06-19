const verticalthumbs = import.meta.glob('../assets/images/Thumbs/Verts/*', { eager: true, query: '?url', import: 'default' });
const verticalfulls = import.meta.glob('../assets/images/Fulls/Verts/*', { eager: true, query: '?url', import: 'default' });
const horizontalthumbs = import.meta.glob('../assets/images/Thumbs/Horiz/*', { eager: true, query: '?url', import: 'default' });
const horizontalfulls = import.meta.glob('../assets/images/Fulls/Horiz/*', { eager: true, query: '?url', import: 'default' });

export const vertst = Object.fromEntries(
    Object.entries(verticalthumbs).map(([path, url]) => [
        path.split('/').pop(),
        url
    ])
);

export const vertsf = Object.fromEntries(
    Object.entries(verticalfulls).map(([path, url]) => [
        path.split('/').pop(),
        url
    ])
);

export const horizst = Object.fromEntries(
    Object.entries(horizontalthumbs).map(([path, url]) => [
        path.split('/').pop(),
        url
    ])
);

export const horizsf = Object.fromEntries(
    Object.entries(horizontalfulls).map(([path, url]) => [
        path.split('/').pop(),
        url
    ])
);