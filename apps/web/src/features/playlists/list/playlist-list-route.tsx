import { Suspense } from 'react';
import { PlaylistListContent } from '@/features/playlists/list/playlist-list-content.tsx';
import { PlaylistListHeader } from '@/features/playlists/list/playlist-list-header.tsx';
import { usePlaylistListActions } from '@/features/playlists/stores/playlist-list-store.ts';
import { AnimatedContainer } from '@/features/shared/animated-container/animated-container.tsx';
import { ComponentErrorBoundary } from '@/features/shared/error-boundary/component-error-boundary.tsx';
import { PageContainer } from '@/features/shared/page-container/page-container.tsx';
import { EmptyPlaceholder } from '@/features/ui/placeholders/empty-placeholder.tsx';
import { useDelayedRender } from '@/hooks/use-delayed-render.ts';
import { useListInitialize } from '@/hooks/use-list.ts';

export function PlaylistListRoute() {
    const { setListId } = usePlaylistListActions();
    useListInitialize({ setListId });

    const { show } = useDelayedRender(300);

    return (
        <PageContainer id="playlist-list-route">
            <PlaylistListHeader />
            {show && (
                <AnimatedContainer>
                    <Suspense fallback={<EmptyPlaceholder />}>
                        <ComponentErrorBoundary>
                            <PlaylistListContent />
                        </ComponentErrorBoundary>
                    </Suspense>
                </AnimatedContainer>
            )}
        </PageContainer>
    );
}