import { Options, SpreadsheetOptions, SQLOptions, NoSQLOptions } from './types';
import { SpreadsheetService } from './spreadsheet';
import { SQLService } from './sql';
import { NoSQLService } from './nosql';

// TODO: TODO
// add routing errors
// search / indexing (https://github.com/olivernn/lunr.js)
// query
// security
// cache

export function sheets(options?: Options) {
    const Spreadsheet = new SpreadsheetService(options);
    const SQL = new SQLService(options);
    const NoSQL = new NoSQLService(options);
    return { Spreadsheet, SQL, NoSQL };
}

export function spreadsheet(options?: SpreadsheetOptions): SpreadsheetService {
    return new SpreadsheetService(options);
}

export function sheetsSQL(options?: SQLOptions): SQLService {
    return new SQLService(options);
}

export function sheetsNoSQL(options?: NoSQLOptions): NoSQLService {
    return new NoSQLService(options);
}