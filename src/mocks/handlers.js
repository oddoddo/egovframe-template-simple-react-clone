// src/mocks/handlers.js
import { rest } from 'msw';
import { notiListData } from './data/notiListData';
import { galListData } from './data/galListData';

export const handlers = [
    rest.get('/mainPage', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                result: {
                    notiList: notiListData,
                    galList: galListData,
                },
            }),
        );
    }),
];
