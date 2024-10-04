/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Audioling API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
    DefinedInitialDataOptions,
    DefinedUseQueryResult,
    MutationFunction,
    QueryFunction,
    QueryKey,
    UndefinedInitialDataOptions,
    UseMutationOptions,
    UseMutationResult,
    UseQueryOptions,
    UseQueryResult,
} from '@tanstack/react-query';
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type {
    DeleteApiLibrariesId204,
    DeleteApiLibrariesId401,
    DeleteApiLibrariesId403,
    DeleteApiLibrariesId404,
    DeleteApiLibrariesId422,
    DeleteApiLibrariesId500,
    GetApiLibraries200,
    GetApiLibraries401,
    GetApiLibraries403,
    GetApiLibraries404,
    GetApiLibraries422,
    GetApiLibraries500,
    GetApiLibrariesId200,
    GetApiLibrariesId401,
    GetApiLibrariesId403,
    GetApiLibrariesId404,
    GetApiLibrariesId422,
    GetApiLibrariesId500,
    GetApiLibrariesParams,
    PostApiLibraries201,
    PostApiLibraries400,
    PostApiLibraries401,
    PostApiLibraries403,
    PostApiLibraries404,
    PostApiLibraries409,
    PostApiLibraries422,
    PostApiLibraries500,
    PostApiLibrariesBody,
    PutApiLibrariesId200,
    PutApiLibrariesId400,
    PutApiLibrariesId401,
    PutApiLibrariesId403,
    PutApiLibrariesId404,
    PutApiLibrariesId422,
    PutApiLibrariesId500,
    PutApiLibrariesIdBody,
} from '../audioling-openapi-client.schemas.ts';

/**
 * @summary Get all libraries
 */
export const getApiLibraries = (
    params: GetApiLibrariesParams,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetApiLibraries200>> => {
    return axios.get(`/api/libraries`, {
        ...options,
        params: { ...params, ...options?.params },
    });
};

export const getGetApiLibrariesQueryKey = (params: GetApiLibrariesParams) => {
    return [`/api/libraries`, ...(params ? [params] : [])] as const;
};

export const getGetApiLibrariesQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibraries>>,
    TError = AxiosError<
        | GetApiLibraries401
        | GetApiLibraries403
        | GetApiLibraries404
        | GetApiLibraries422
        | GetApiLibraries500
    >,
>(
    params: GetApiLibrariesParams,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibraries>>, TError, TData>
        >;
    },
) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibrariesQueryKey(params);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibraries>>> = ({ signal }) =>
        getApiLibraries(params, { signal, ...axiosOptions });

    return { queryFn, queryKey, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof getApiLibraries>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibrariesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiLibraries>>>;
export type GetApiLibrariesQueryError = AxiosError<
    | GetApiLibraries401
    | GetApiLibraries403
    | GetApiLibraries404
    | GetApiLibraries422
    | GetApiLibraries500
>;

export function useGetApiLibraries<
    TData = Awaited<ReturnType<typeof getApiLibraries>>,
    TError = AxiosError<
        | GetApiLibraries401
        | GetApiLibraries403
        | GetApiLibraries404
        | GetApiLibraries422
        | GetApiLibraries500
    >,
>(
    params: GetApiLibrariesParams,
    options: {
        axios?: AxiosRequestConfig;
        query: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibraries>>, TError, TData>
        > &
            Pick<
                DefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getApiLibraries>>,
                    TError,
                    TData
                >,
                'initialData'
            >;
    },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraries<
    TData = Awaited<ReturnType<typeof getApiLibraries>>,
    TError = AxiosError<
        | GetApiLibraries401
        | GetApiLibraries403
        | GetApiLibraries404
        | GetApiLibraries422
        | GetApiLibraries500
    >,
>(
    params: GetApiLibrariesParams,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibraries>>, TError, TData>
        > &
            Pick<
                UndefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getApiLibraries>>,
                    TError,
                    TData
                >,
                'initialData'
            >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibraries<
    TData = Awaited<ReturnType<typeof getApiLibraries>>,
    TError = AxiosError<
        | GetApiLibraries401
        | GetApiLibraries403
        | GetApiLibraries404
        | GetApiLibraries422
        | GetApiLibraries500
    >,
>(
    params: GetApiLibrariesParams,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibraries>>, TError, TData>
        >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get all libraries
 */

export function useGetApiLibraries<
    TData = Awaited<ReturnType<typeof getApiLibraries>>,
    TError = AxiosError<
        | GetApiLibraries401
        | GetApiLibraries403
        | GetApiLibraries404
        | GetApiLibraries422
        | GetApiLibraries500
    >,
>(
    params: GetApiLibrariesParams,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibraries>>, TError, TData>
        >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibrariesQueryOptions(params, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

/**
 * Create a library
 * @summary Create library
 */
export const postApiLibraries = (
    postApiLibrariesBody: PostApiLibrariesBody,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse<PostApiLibraries201>> => {
    return axios.post(`/api/libraries`, postApiLibrariesBody, options);
};

export const getPostApiLibrariesMutationOptions = <
    TError = AxiosError<
        | PostApiLibraries400
        | PostApiLibraries401
        | PostApiLibraries403
        | PostApiLibraries404
        | PostApiLibraries409
        | PostApiLibraries422
        | PostApiLibraries500
    >,
    TContext = unknown,
>(options?: {
    axios?: AxiosRequestConfig;
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof postApiLibraries>>,
        TError,
        { data: PostApiLibrariesBody },
        TContext
    >;
}): UseMutationOptions<
    Awaited<ReturnType<typeof postApiLibraries>>,
    TError,
    { data: PostApiLibrariesBody },
    TContext
> => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof postApiLibraries>>,
        { data: PostApiLibrariesBody }
    > = (props) => {
        const { data } = props ?? {};

        return postApiLibraries(data, axiosOptions);
    };

    return { mutationFn, ...mutationOptions };
};

export type PostApiLibrariesMutationResult = NonNullable<
    Awaited<ReturnType<typeof postApiLibraries>>
>;
export type PostApiLibrariesMutationBody = PostApiLibrariesBody;
export type PostApiLibrariesMutationError = AxiosError<
    | PostApiLibraries400
    | PostApiLibraries401
    | PostApiLibraries403
    | PostApiLibraries404
    | PostApiLibraries409
    | PostApiLibraries422
    | PostApiLibraries500
>;

/**
 * @summary Create library
 */
export const usePostApiLibraries = <
    TError = AxiosError<
        | PostApiLibraries400
        | PostApiLibraries401
        | PostApiLibraries403
        | PostApiLibraries404
        | PostApiLibraries409
        | PostApiLibraries422
        | PostApiLibraries500
    >,
    TContext = unknown,
>(options?: {
    axios?: AxiosRequestConfig;
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof postApiLibraries>>,
        TError,
        { data: PostApiLibrariesBody },
        TContext
    >;
}): UseMutationResult<
    Awaited<ReturnType<typeof postApiLibraries>>,
    TError,
    { data: PostApiLibrariesBody },
    TContext
> => {
    const mutationOptions = getPostApiLibrariesMutationOptions(options);

    return useMutation(mutationOptions);
};
/**
 * @summary Get library by id
 */
export const getApiLibrariesId = (
    id: string,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetApiLibrariesId200>> => {
    return axios.get(`/api/libraries/${id}`, options);
};

export const getGetApiLibrariesIdQueryKey = (id: string) => {
    return [`/api/libraries/${id}`] as const;
};

export const getGetApiLibrariesIdQueryOptions = <
    TData = Awaited<ReturnType<typeof getApiLibrariesId>>,
    TError = AxiosError<
        | GetApiLibrariesId401
        | GetApiLibrariesId403
        | GetApiLibrariesId404
        | GetApiLibrariesId422
        | GetApiLibrariesId500
    >,
>(
    id: string,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibrariesId>>, TError, TData>
        >;
    },
) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetApiLibrariesIdQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLibrariesId>>> = ({ signal }) =>
        getApiLibrariesId(id, { signal, ...axiosOptions });

    return { enabled: !!id, queryFn, queryKey, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof getApiLibrariesId>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type GetApiLibrariesIdQueryResult = NonNullable<
    Awaited<ReturnType<typeof getApiLibrariesId>>
>;
export type GetApiLibrariesIdQueryError = AxiosError<
    | GetApiLibrariesId401
    | GetApiLibrariesId403
    | GetApiLibrariesId404
    | GetApiLibrariesId422
    | GetApiLibrariesId500
>;

export function useGetApiLibrariesId<
    TData = Awaited<ReturnType<typeof getApiLibrariesId>>,
    TError = AxiosError<
        | GetApiLibrariesId401
        | GetApiLibrariesId403
        | GetApiLibrariesId404
        | GetApiLibrariesId422
        | GetApiLibrariesId500
    >,
>(
    id: string,
    options: {
        axios?: AxiosRequestConfig;
        query: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibrariesId>>, TError, TData>
        > &
            Pick<
                DefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getApiLibrariesId>>,
                    TError,
                    TData
                >,
                'initialData'
            >;
    },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibrariesId<
    TData = Awaited<ReturnType<typeof getApiLibrariesId>>,
    TError = AxiosError<
        | GetApiLibrariesId401
        | GetApiLibrariesId403
        | GetApiLibrariesId404
        | GetApiLibrariesId422
        | GetApiLibrariesId500
    >,
>(
    id: string,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibrariesId>>, TError, TData>
        > &
            Pick<
                UndefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getApiLibrariesId>>,
                    TError,
                    TData
                >,
                'initialData'
            >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiLibrariesId<
    TData = Awaited<ReturnType<typeof getApiLibrariesId>>,
    TError = AxiosError<
        | GetApiLibrariesId401
        | GetApiLibrariesId403
        | GetApiLibrariesId404
        | GetApiLibrariesId422
        | GetApiLibrariesId500
    >,
>(
    id: string,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibrariesId>>, TError, TData>
        >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get library by id
 */

export function useGetApiLibrariesId<
    TData = Awaited<ReturnType<typeof getApiLibrariesId>>,
    TError = AxiosError<
        | GetApiLibrariesId401
        | GetApiLibrariesId403
        | GetApiLibrariesId404
        | GetApiLibrariesId422
        | GetApiLibrariesId500
    >,
>(
    id: string,
    options?: {
        axios?: AxiosRequestConfig;
        query?: Partial<
            UseQueryOptions<Awaited<ReturnType<typeof getApiLibrariesId>>, TError, TData>
        >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetApiLibrariesIdQueryOptions(id, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

/**
 * Update a library
 * @summary Update library by id
 */
export const putApiLibrariesId = (
    id: string,
    putApiLibrariesIdBody: PutApiLibrariesIdBody,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse<PutApiLibrariesId200>> => {
    return axios.put(`/api/libraries/${id}`, putApiLibrariesIdBody, options);
};

export const getPutApiLibrariesIdMutationOptions = <
    TError = AxiosError<
        | PutApiLibrariesId400
        | PutApiLibrariesId401
        | PutApiLibrariesId403
        | PutApiLibrariesId404
        | PutApiLibrariesId422
        | PutApiLibrariesId500
    >,
    TContext = unknown,
>(options?: {
    axios?: AxiosRequestConfig;
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof putApiLibrariesId>>,
        TError,
        { data: PutApiLibrariesIdBody; id: string },
        TContext
    >;
}): UseMutationOptions<
    Awaited<ReturnType<typeof putApiLibrariesId>>,
    TError,
    { data: PutApiLibrariesIdBody; id: string },
    TContext
> => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof putApiLibrariesId>>,
        { data: PutApiLibrariesIdBody; id: string }
    > = (props) => {
        const { id, data } = props ?? {};

        return putApiLibrariesId(id, data, axiosOptions);
    };

    return { mutationFn, ...mutationOptions };
};

export type PutApiLibrariesIdMutationResult = NonNullable<
    Awaited<ReturnType<typeof putApiLibrariesId>>
>;
export type PutApiLibrariesIdMutationBody = PutApiLibrariesIdBody;
export type PutApiLibrariesIdMutationError = AxiosError<
    | PutApiLibrariesId400
    | PutApiLibrariesId401
    | PutApiLibrariesId403
    | PutApiLibrariesId404
    | PutApiLibrariesId422
    | PutApiLibrariesId500
>;

/**
 * @summary Update library by id
 */
export const usePutApiLibrariesId = <
    TError = AxiosError<
        | PutApiLibrariesId400
        | PutApiLibrariesId401
        | PutApiLibrariesId403
        | PutApiLibrariesId404
        | PutApiLibrariesId422
        | PutApiLibrariesId500
    >,
    TContext = unknown,
>(options?: {
    axios?: AxiosRequestConfig;
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof putApiLibrariesId>>,
        TError,
        { data: PutApiLibrariesIdBody; id: string },
        TContext
    >;
}): UseMutationResult<
    Awaited<ReturnType<typeof putApiLibrariesId>>,
    TError,
    { data: PutApiLibrariesIdBody; id: string },
    TContext
> => {
    const mutationOptions = getPutApiLibrariesIdMutationOptions(options);

    return useMutation(mutationOptions);
};
/**
 * @summary Delete library by id
 */
export const deleteApiLibrariesId = (
    id: string,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse<DeleteApiLibrariesId204>> => {
    return axios.delete(`/api/libraries/${id}`, options);
};

export const getDeleteApiLibrariesIdMutationOptions = <
    TError = AxiosError<
        | DeleteApiLibrariesId401
        | DeleteApiLibrariesId403
        | DeleteApiLibrariesId404
        | DeleteApiLibrariesId422
        | DeleteApiLibrariesId500
    >,
    TContext = unknown,
>(options?: {
    axios?: AxiosRequestConfig;
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteApiLibrariesId>>,
        TError,
        { id: string },
        TContext
    >;
}): UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiLibrariesId>>,
    TError,
    { id: string },
    TContext
> => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof deleteApiLibrariesId>>,
        { id: string }
    > = (props) => {
        const { id } = props ?? {};

        return deleteApiLibrariesId(id, axiosOptions);
    };

    return { mutationFn, ...mutationOptions };
};

export type DeleteApiLibrariesIdMutationResult = NonNullable<
    Awaited<ReturnType<typeof deleteApiLibrariesId>>
>;

export type DeleteApiLibrariesIdMutationError = AxiosError<
    | DeleteApiLibrariesId401
    | DeleteApiLibrariesId403
    | DeleteApiLibrariesId404
    | DeleteApiLibrariesId422
    | DeleteApiLibrariesId500
>;

/**
 * @summary Delete library by id
 */
export const useDeleteApiLibrariesId = <
    TError = AxiosError<
        | DeleteApiLibrariesId401
        | DeleteApiLibrariesId403
        | DeleteApiLibrariesId404
        | DeleteApiLibrariesId422
        | DeleteApiLibrariesId500
    >,
    TContext = unknown,
>(options?: {
    axios?: AxiosRequestConfig;
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteApiLibrariesId>>,
        TError,
        { id: string },
        TContext
    >;
}): UseMutationResult<
    Awaited<ReturnType<typeof deleteApiLibrariesId>>,
    TError,
    { id: string },
    TContext
> => {
    const mutationOptions = getDeleteApiLibrariesIdMutationOptions(options);

    return useMutation(mutationOptions);
};