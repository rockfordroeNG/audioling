import type { AdapterRelatedGenre } from '@/adapters/types/adapter-genre-types.js';
import type { AdapterSortOrder } from '@/adapters/types/index.js';
import type { PaginatedResponse, QueryRequest } from '@/adapters/types/shared-types.js';

export interface AdapterAlbumArtist {
    albumCount: number | null;
    biography: string | null;
    createdAt: string | null;
    duration: number | null;
    external: {
        musicbrainz: {
            id: string | null;
            name: string | null;
        };
    };
    genres: AdapterRelatedGenre[];
    id: string;
    name: string;
    songCount: number | null;
    updatedAt: string | null;
    userFavorite: boolean;
    userRating: number | null;
}

export interface AdapterRelatedArtist {
    id: string;
    imageUrl: string | null;
    name: string;
}

export interface AdapterRelatedAlbumArtist {
    id: string;
    imageUrl: string | null;
    name: string;
}

export type AdapterArtistListResponse = PaginatedResponse<AdapterAlbumArtist>;

export enum AdapterArtistListSort {
    ALBUM = 'album',
    ALBUM_COUNT = 'albumCount',
    DURATION = 'duration',
    FAVORITED = 'favorited',
    NAME = 'name',
    PLAY_COUNT = 'playCount',
    RANDOM = 'random',
    RATING = 'rating',
    RECENTLY_ADDED = 'recentlyAdded',
    RELEASE_DATE = 'releaseDate',
    SONG_COUNT = 'songCount',
}

export type AdapterArtistListQuery = {
    limit: number;
    musicFolderId?: string;
    sortBy: AdapterArtistListSort;
    sortOrder: AdapterSortOrder;
    startIndex: number;
};

export type AdapterArtistListRequest = QueryRequest<AdapterArtistListQuery>;

export type AdapterArtistListCountQuery = {
    musicFolderId?: string;
};

export type AdapterArtistListCountRequest = QueryRequest<AdapterArtistListCountQuery>;

export type AdapterArtistListCountResponse = number;
