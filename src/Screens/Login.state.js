import {
    atom,
    selector
} from 'recoil';

export const isAdminAtom = atom({
    key: 'loginState$isAdminAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const tokenAtom = atom({
    key: 'loginState$tokenAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const isLoginAtom = atom({
    key: 'loginState$isLogin', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const idAtom = atom({
    key: 'loginState$idAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});