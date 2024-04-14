import express from 'express';

import { manifestMiddleware } from 'server/middleware';
import { asyncWrapper } from 'server/utils';

const router = express.Router();

router.use(manifestMiddleware);

router.use(
    asyncWrapper(async (req, res, next) => {
        let initialPageData = {};
        try {
            // TODO: add some user-specific thing to request?
            const pageDataResponse = await fetch(`/nlp-ssa/internal-api/v1/home`);
            initialPageData = await pageDataResponse.json();
        } catch (e) {
            console.warn(`[home route] - caught exception: ${e}`);
        }

        console.log({ localsManifest: res.locals.manifest });
        return res.render('index', {
            layout: 'index',
            initialPageData: JSON.stringify(initialPageData),
            ...res.locals.manifest['common'],
            ...res.locals.manifest['home'],
            ...res.locals.manifest['react-vendors'],
        });
    }),
);

export default router;
