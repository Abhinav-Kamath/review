import {
    atom,
    selector
} from 'recoil';

export const SearchTextAtom = atom({
    key: 'searcgState$SearchTextAtom', // unique ID (with respect to other atoms/selectors)
    default: '' // default value (aka initial value)
});