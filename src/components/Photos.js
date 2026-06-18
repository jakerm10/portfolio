// const verticalthumbs = import.meta.glob('../assets/images/Thumbs/Verts/*', { eager: true, as: 'url' });
// export const vertst = Object.fromEntries(
//     Object.entries(verticalthumbs).map(([path, url]) => [path.split('/').pop(), url])
// );

// const verticalfulls = import.meta.glob('../assets/images/Fulls/Verts/*', { eager: true, as: 'url' });
// export const vertsf = Object.fromEntries(
//     Object.entries(verticalfulls).map(([path, url]) => [path.split('/').pop(), url])
// );

// const horizontalthumbs = import.meta.glob('../assets/images/Thumbs/Horiz/*', { eager: true, as: 'url' });
// export const horizst = Object.fromEntries(
//     Object.entries(horizontalthumbs).map(([path, url]) => [path.split('/').pop(), url])
// );

// const horizontalfulls = import.meta.glob('../assets/images/Fulls/Horiz/*', { eager: true, as: 'url' });
// export const horizsf = Object.fromEntries(
//     Object.entries(horizontalfulls).map(([path, url]) => [path.split('/').pop(), url])
// );
const verticalthumbs = import.meta.glob('../assets/images/Thumbs/Verts/*', { eager: true, as: 'url' });
const verticalfulls = import.meta.glob('../assets/images/Fulls/Verts/*', { eager: true, as: 'url' });
const horizontalthumbs = import.meta.glob('../assets/images/Thumbs/Horiz/*', { eager: true, as: 'url' });
const horizontalfulls = import.meta.glob('../assets/images/Fulls/Horiz/*', { eager: true, as: 'url' });
export const vertst = Object.fromEntries(
    Object.entries(verticalthumbs).map(([path, mod]) => [
        path.split('/').pop(),
        mod.default
    ])
);

export const vertsf = Object.fromEntries(
    Object.entries(verticalfulls).map(([path, mod]) => [
        path.split('/').pop(),
        mod.default
    ])
);

export const horizst = Object.fromEntries(
    Object.entries(horizontalthumbs).map(([path, mod]) => [
        path.split('/').pop(),
        mod.default
    ])
);

export const horizsf = Object.fromEntries(
    Object.entries(horizontalfulls).map(([path, mod]) => [
        path.split('/').pop(),
        mod.default
    ])
);