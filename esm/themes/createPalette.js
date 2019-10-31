var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { merge } from '../libs/lodash';
import { darken, rgba, transparentize } from 'polished';
export var defaultPalette = {
    TEXT_BLACK: '#333',
    TEXT_GREY: '#767676',
    TEXT_DISABLED: '#c1c1c1',
    BORDER: '#d6d6d6',
    BACKGROUND: '#f5f6fa',
    COLUMN: '#f9f9f9',
    MAIN: '#00a5ab',
    DANGER: '#ef475b',
    WARNING: '#ff8800',
    SCRIM: 'rgba(0,0,0,0.5)',
    OVERLAY: 'rgba(0,0,0,0.15)',
};
export var createPalette = function (userPalette) {
    if (userPalette === void 0) { userPalette = {}; }
    var created = merge(__assign({ hoverColor: function (value) { return darken(0.05, value); }, disableColor: function (value) { return rgba(value, 0.5); }, OUTLINE: transparentize(0.5, defaultPalette.MAIN) }, defaultPalette), userPalette, userPalette.OUTLINE == null && userPalette.MAIN != null
        ? { OUTLINE: transparentize(0.5, userPalette.MAIN) }
        : null);
    return created;
};
//# sourceMappingURL=createPalette.js.map