import { initLibraryDatabase } from '@/database/library-database.js';
import { initTokenDatabase } from '@/database/token-database.js';
import { initUserDatabase } from '@/database/user-database.js';
import type { IdFactoryModule } from '@/modules/id/index.js';

export const initDatabase = (modules: DatabaseModules) => {
    return {
        library: initLibraryDatabase(modules),
        token: initTokenDatabase(modules),
        user: initUserDatabase(modules),
    };
};

export type DatabaseModules = {
    idFactory: IdFactoryModule;
};

export type AppDatabase = ReturnType<typeof initDatabase>;
