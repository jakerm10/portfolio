const vertical = import.meta.glob('../assets/images/Verts/*', {eager:true});
export const verts=Object.values(vertical).map(module=>module.default);

const horizontal = import.meta.glob('../assets/images/Horiz/*', {eager:true});
export const horizs=Object.values(horizontal).map(module=>module.default);