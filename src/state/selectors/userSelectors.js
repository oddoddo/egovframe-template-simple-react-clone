// src/state/selectors/userSelectors.js
import { selector } from 'recoil';
import { userState } from '../atoms/userState';

export const userNameSelector = selector({
    key: 'userNameSelector',
    get: ({ get }) => {
        const user = get(userState);
        return `${user.firstName} ${user.lastName}`;
    },
});
