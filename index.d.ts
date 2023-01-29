/*!
    @e53e04ac/ipp5-bookshelf-reader/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { DateTime } from 'date-time';
import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';
import { Ipp5DailySummaryData } from 'ipp5-types';
import { Ipp5MenuData } from 'ipp5-types';
import { Ipp5MonthlySummaryData } from 'ipp5-types';
import { Ipp5YearlySummaryData } from 'ipp5-types';

export declare namespace Ipp5BookshelfReader {

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly rootEntry: ValueOrGet<FileEntry>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly menuDataEntry: {
            (params: {
                readonly tenantId: string;
            }): FileEntry;
        };
        readonly yearlySummaryDataEntry: {
            (params: {
                readonly tenantId: string;
                readonly time: DateTime;
            }): FileEntry;
        };
        readonly monthlySummaryDataEntry: {
            (params: {
                readonly tenantId: string;
                readonly time: DateTime;
            }): FileEntry;
        };
        readonly dailySummaryDataEntry: {
            (params: {
                readonly tenantId: string;
                readonly time: DateTime;
            }): FileEntry;
        };
        readonly NotFound: {
            (): Error;
        };
        readonly InternalServerError: {
            (): Error;
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5BookshelfReader: Get<_Self>;
        readonly menuData: {
            (params: {
                readonly tenantId: string;
            }): Promise<{
                readonly error?: null | Error;
                readonly menuData?: null | Ipp5MenuData;
            }>;
        };
        readonly yearlySummaryData: {
            (params: {
                readonly tenantId: string;
                readonly time: DateTime;
            }): Promise<{
                readonly error?: null | Error;
                readonly yearlySummaryData?: null | Ipp5YearlySummaryData;
            }>;
        };
        readonly monthlySummaryData: {
            (params: {
                readonly tenantId: string;
                readonly time: DateTime;
            }): Promise<{
                readonly error?: null | Error;
                readonly monthlySummaryData?: null | Ipp5MonthlySummaryData;
            }>;
        };
        readonly dailySummaryData: {
            (params: {
                readonly tenantId: string;
                readonly time: DateTime;
            }): Promise<{
                readonly error?: null | Error;
                readonly dailySummaryData?: null | Ipp5DailySummaryData;
            }>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5BookshelfReader = Ipp5BookshelfReader.Self;

export declare const Ipp5BookshelfReader: Ipp5BookshelfReader.ConstructorWithCompanion;
