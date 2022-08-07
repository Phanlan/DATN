
export function addBorderThin(cell, colNumber) {
    if(!cell) return;
    cell.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
    };
};