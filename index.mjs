/*!
    @e53e04ac/ipp5-bookshelf-reader/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Ipp5BookshelfReader.Constructor} */
const constructor = ((options) => {

    const _options = ({
        rootEntry: hold(() => {
            return unwrap(options.rootEntry);
        }),
    });

    /** @type {import('.').Ipp5BookshelfReader._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        menuDataEntry: (({ tenantId }) => {
            return _options.rootEntry().resolve(tenantId, 'menu', 'index.json');
        }),
        yearlySummaryDataEntry: (({ tenantId, time }) => {
            return _options.rootEntry().resolve(tenantId, 'yearly-summary', time.YYYY(), 'index.json');
        }),
        monthlySummaryDataEntry: (({ tenantId, time }) => {
            return _options.rootEntry().resolve(tenantId, 'monthly-summary', time.YYYY(), time.MM(), 'index.json');
        }),
        dailySummaryDataEntry: (({ tenantId, time }) => {
            return _options.rootEntry().resolve(tenantId, 'daily-summary', time.YYYY(), time.MM(), time.DD(), 'index.json');
        }),
        NotFound: (() => {
            return {
                name: 'Error',
                message: 'Not Found',
                notFound: true,
            };
        }),
        InternalServerError: (() => {
            return {
                name: 'Error',
                message: 'Internal Server Error',
                internalServerError: true,
            };
        }),
    });

    /** @type {import('.').Ipp5BookshelfReader.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5BookshelfReader: (() => {
            return _self;
        }),
        menuData: (async ({ tenantId }) => {
            return await _self.menuDataEntry({ tenantId }).readJson().then((value) => {
                if (typeof value !== 'object' || value == null) {
                    throw new Error();
                }
                return value;
            }).catch((error) => {
                if (error.code == 'ENOENT' || error.statusCode == 404) {
                    return { error: _self.NotFound() };
                }
                return { error: _self.InternalServerError() };
            });
        }),
        yearlySummaryData: (async ({ tenantId, time }) => {
            return await _self.yearlySummaryDataEntry({ tenantId, time }).readJson().then((value) => {
                if (typeof value !== 'object' || value == null) {
                    throw new Error();
                }
                return value;
            }).catch((error) => {
                if (error.code == 'ENOENT' || error.statusCode == 404) {
                    return { error: _self.NotFound() };
                }
                return { error: _self.InternalServerError() };
            });
        }),
        monthlySummaryData: (async ({ tenantId, time }) => {
            return await _self.monthlySummaryDataEntry({ tenantId, time }).readJson().then((value) => {
                if (typeof value !== 'object' || value == null) {
                    throw new Error();
                }
                return value;
            }).catch((error) => {
                if (error.code == 'ENOENT' || error.statusCode == 404) {
                    return { error: _self.NotFound() };
                }
                return { error: _self.InternalServerError() };
            });
        }),
        dailySummaryData: (async ({ tenantId, time }) => {
            return await _self.dailySummaryDataEntry({ tenantId, time }).readJson().then((value) => {
                if (typeof value !== 'object' || value == null) {
                    throw new Error();
                }
                return value;
            }).catch((error) => {
                if (error.code == 'ENOENT' || error.statusCode == 404) {
                    return { error: _self.NotFound() };
                }
                return { error: _self.InternalServerError() };
            });
        }),
    });

    return self;

});

/** @type {import('.').Ipp5BookshelfReader.Companion} */
const companion = ({});

/** @type {import('.').Ipp5BookshelfReader.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5BookshelfReader };
