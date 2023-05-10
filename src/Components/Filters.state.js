import {
    atom,
    selector
} from 'recoil';


export const GenreAtom = atom({
    key: 'filterState$GenreAtom', // unique ID (with respect to other atoms/selectors)
    default: { title: "Category" }, // default value (aka initial value)
});

export const YearAtom = atom({
    key: 'filterState$YearAtom', // unique ID (with respect to other atoms/selectors)
    default:{ title: "Sort by Year" }, // default value (aka initial value)
});

export const LanguageAtom = atom({
    key: 'filterState$LanguageAtom', // unique ID (with respect to other atoms/selectors)
    default:{ title: "Sort by Language" }, // default value (aka initial value)
});

export const StarsAtom = atom({
    key: 'filterState$StarsAtom', // unique ID (with respect to other atoms/selectors)
    default:{ title: "Sort by Rating" }, // default value (aka initial value)
});
