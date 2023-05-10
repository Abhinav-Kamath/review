import {
    atom,
    selector
} from 'recoil';

export const FavDataAtom = atom({
    key: 'favState$FavdataAtom', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
