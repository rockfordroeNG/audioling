import { useCallback, useEffect } from 'react';
import type { AlbumListSortOptions, ListSortOrder } from '@repo/shared-types';
import { useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import type {
    ItemListDisplayType,
    ItemListPaginationState,
} from '@/features/ui/item-list/types.ts';
import { ItemListPaginationType } from '@/features/ui/item-list/types.ts';
import { randomString } from '@/utils/random-string.ts';

interface UseListInitializeProps {
    setListId: (key: string, listId: string) => void;
}

export function useListInitialize({ setListId }: UseListInitializeProps) {
    const location = useLocation();
    const id = randomString(12);

    useEffect(() => {
        setListId(location.pathname, id);
    }, [id, location.pathname, setListId]);

    return id;
}

interface UseListKeyProps<TSortOptions> {
    displayType: ItemListDisplayType;
    listId: Record<string, string>;
    pagination?: ItemListPaginationState;
    paginationType?: ItemListPaginationType;
    sortBy: TSortOptions;
    sortOrder: ListSortOrder;
}

export function useListKey<TSortOptions>({
    displayType,
    listId,
    pagination,
    paginationType,
    sortBy,
    sortOrder,
}: UseListKeyProps<TSortOptions>) {
    const location = useLocation();

    if (paginationType === ItemListPaginationType.PAGINATED) {
        return `${sortBy}-${sortOrder}-${paginationType}-${pagination?.currentPage}-${listId[location.pathname]}`;
    }

    return `${sortBy}-${sortOrder}-${displayType}-${listId[location.pathname]}`;
}

interface UseRefreshListProps {
    queryKey: string[];
    setListId: (pathname: string, listId: string) => void;
}

export function useRefreshList({ queryKey, setListId }: UseRefreshListProps) {
    const location = useLocation();
    const queryClient = useQueryClient();

    const handleRefresh = async () => {
        await queryClient.invalidateQueries({ queryKey });
        setListId(location.pathname, randomString(12));
    };

    return handleRefresh;
}

interface UseListPaginationProps {
    pagination: ItemListPaginationState;
    setPagination: (pagination: ItemListPaginationState) => void;
}

export function useListPagination({ pagination, setPagination }: UseListPaginationProps) {
    const onFirstPage = useCallback(
        () => setPagination({ ...pagination, currentPage: 0 }),
        [pagination, setPagination],
    );

    const onLastPage = useCallback(
        () => setPagination({ ...pagination, currentPage: 0 }),
        [pagination, setPagination],
    );

    const onNextPage = useCallback(
        () => setPagination({ ...pagination, currentPage: pagination.currentPage + 1 }),
        [pagination, setPagination],
    );

    const onPageChange = useCallback(
        (page: number) => setPagination({ ...pagination, currentPage: page }),
        [pagination, setPagination],
    );

    const onPreviousPage = useCallback(
        () => setPagination({ ...pagination, currentPage: pagination.currentPage - 1 }),
        [pagination, setPagination],
    );

    return { onFirstPage, onLastPage, onNextPage, onPageChange, onPreviousPage };
}