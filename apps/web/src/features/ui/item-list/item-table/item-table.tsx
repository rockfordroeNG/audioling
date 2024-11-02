import type { CSSProperties, SyntheticEvent } from 'react';
import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
    draggable,
    dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';
import {
    attachClosestEdge,
    extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import type { Edge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import type { ColumnOrderState, DisplayColumnDef, Header } from '@tanstack/react-table';
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { Virtuoso } from 'react-virtuoso';
import { itemListHelpers } from '@/features/ui/item-list/helpers.ts';
import { dndUtils, DragTarget } from '@/utils/drag-drop.ts';
import type { DragData } from '@/utils/drag-drop.ts';
import styles from './item-table.module.scss';

export interface TableItemProps<T, C extends Record<string, unknown>> {
    context?: C;
    data: T | undefined;
    index: number;
}

interface InfiniteItemTableProps<T, C extends Record<string, unknown>> {
    columnOrder: ColumnOrderState;
    columns: DisplayColumnDef<T | undefined>[];
    context?: C;
    data: (T | undefined)[];
    initialScrollIndex?: number;
    isScrolling?: (isScrolling: boolean) => void;
    itemCount: number;
    onEndReached?: (index: number) => void;
    onRangeChanged?: (args: { endIndex: number; startIndex: number }) => void;
    onScroll?: (event: SyntheticEvent) => void;
    onStartReached?: (index: number) => void;
    setColumnOrder: (columnOrder: ColumnOrderState) => void;
}

export function InfiniteItemTable<T extends { id: string }, C extends Record<string, unknown>>(
    props: InfiniteItemTableProps<T, C>,
) {
    const {
        columns,
        columnOrder,
        setColumnOrder,
        context,
        data,
        initialScrollIndex,
        isScrolling,
        itemCount,
        onEndReached,
        onRangeChanged,
        onScroll,
        onStartReached,
    } = props;

    const tableId = useId();

    const rowsRef = useRef(null);

    const [scroller, setScroller] = useState<HTMLElement | Window | null>(null);
    const [initialize, osInstance] = useOverlayScrollbars({
        defer: true,
        options: {
            overflow: { x: 'hidden', y: 'scroll' },
            paddingAbsolute: true,
            scrollbars: {
                autoHide: 'leave',
                autoHideDelay: 500,
                pointers: ['mouse', 'pen', 'touch'],
                theme: 'al-os-scrollbar',
                visibility: 'visible',
            },
        },
    });

    useEffect(() => {
        const { current: root } = rowsRef;

        if (scroller && root) {
            initialize({
                elements: { viewport: scroller as HTMLElement },
                target: root,
            });
        }

        return () => osInstance()?.destroy();
    }, [scroller, initialize, osInstance]);

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            columnOrder,
        },
    });

    const { rows } = table.getRowModel();

    const headers = table.getFlatHeaders();

    const columnStyles = useMemo(() => {
        const headerSizes = headers.map((header) => header.getSize());

        const sizes: string[] = [];
        const columns = headerSizes.map((size) => {
            if (size > 100000) {
                sizes.push(itemListHelpers.table.columnSizeToStyle(size));
                return itemListHelpers.table.columnSizeToStyle(size);
            }

            sizes.push(itemListHelpers.table.columnSizeToStyle(size));
            return itemListHelpers.table.columnSizeToStyle(size);
        });

        const styles = {
            gridTemplateColumns: columns.join(' '),
        };

        return { sizes, styles };
    }, [headers]);

    return (
        <div className={styles.container}>
            <div className={styles.header} style={columnStyles.styles}>
                {headers.map((header) => (
                    <TableHeader
                        key={`header-${header.id}`}
                        columnOrder={columnOrder}
                        columnStyles={columnStyles.styles}
                        header={header}
                        setColumnOrder={setColumnOrder}
                        tableId={tableId}
                    />
                ))}
            </div>
            <div ref={rowsRef} className={styles.rows} data-overlayscrollbars-initialize="">
                <Virtuoso
                    context={{ ...context, columnStyles }}
                    data={data}
                    endReached={onEndReached}
                    increaseViewportBy={300}
                    initialTopMostItemIndex={initialScrollIndex || 0}
                    isScrolling={isScrolling}
                    itemContent={(index, _data, context) => {
                        const row = rows[index];

                        if (!row) {
                            return null;
                        }

                        return (
                            <div className={styles.row} style={context?.columnStyles.styles}>
                                {row?.getVisibleCells()?.map((cell) => {
                                    return (
                                        <Fragment key={`${tableId}-cell-${cell.id}`}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </Fragment>
                                    );
                                })}
                            </div>
                        );
                    }}
                    rangeChanged={onRangeChanged}
                    scrollerRef={setScroller}
                    startReached={onStartReached}
                    totalCount={itemCount}
                    onScroll={onScroll}
                />
            </div>
        </div>
    );
}

interface TableHeaderProps<T> {
    columnOrder: ColumnOrderState;
    columnStyles: CSSProperties;
    header: Header<T | undefined, unknown>;
    setColumnOrder: (columnOrder: ColumnOrderState) => void;
    tableId: string;
}

function TableHeader<T>(props: TableHeaderProps<T>) {
    const { columnOrder, header, columnStyles, setColumnOrder, tableId } = props;
    const ref = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [isDraggedOver, setIsDraggedOver] = useState<Edge | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        return combine(
            draggable({
                element: ref.current,
                getInitialData: () => {
                    const data = dndUtils.generateDragData(header.id, DragTarget.TABLE_COLUMN);
                    return data;
                },
                onDragStart: () => {
                    setIsDragging(true);
                },
                onDrop: () => {
                    setIsDragging(false);
                },
                onGenerateDragPreview: (data) => {
                    disableNativeDragPreview({ nativeSetDragImage: data.nativeSetDragImage });
                },
            }),
            dropTargetForElements({
                canDrop: (args) => {
                    const data = args.source.data as DragData;
                    const isSelf = args.source.data.id === header.id;
                    return dndUtils.isDropTarget(data.type, [DragTarget.TABLE_COLUMN]) && !isSelf;
                },
                element: ref.current,
                getData: ({ input, element }) => {
                    const data = dndUtils.generateDragData(header.id, DragTarget.TABLE_COLUMN);

                    return attachClosestEdge(data, {
                        allowedEdges: ['left', 'right'],
                        element,
                        input,
                    });
                },
                onDrag: (args) => {
                    const closestEdgeOfTarget: Edge | null = extractClosestEdge(args.self.data);
                    setIsDraggedOver(closestEdgeOfTarget);
                },
                onDragLeave: () => {
                    setIsDraggedOver(null);
                },
                onDrop: (args) => {
                    const closestEdgeOfTarget: Edge | null = extractClosestEdge(args.self.data);

                    const newColumnOrder = dndUtils.reorderById({
                        edge: closestEdgeOfTarget,
                        idFrom: args.source.data.id as string,
                        idTo: args.self.data.id as string,
                        list: columnOrder,
                    });

                    setColumnOrder(newColumnOrder);
                    setIsDraggedOver(null);
                },
            }),
        );
    }, [columnOrder, header.id, setColumnOrder, tableId]);

    return (
        <div
            ref={ref}
            className={clsx(styles.headerCell, {
                [styles.dragging]: isDragging,
                [styles.draggedOverLeft]: isDraggedOver === 'left',
                [styles.draggedOverRight]: isDraggedOver === 'right',
            })}
            style={columnStyles}
        >
            {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
    );
}

// function TableBody<T>({ table }: { table: Table<T> }) {
//     const { rows } = table.getRowModel();

//     return (
//         <div>
//             {rows.map((row) =>
//                 row
//                     .getVisibleCells()
//                     .map((cell) => flexRender(cell.column.columnDef.cell, cell.getContext())),
//             )}
//         </div>
//     );
// }

// function TableCell() {
//     return <div>TableCell</div>;
// }