import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center } from '@/features/ui/center/center.tsx';
import { Group } from '@/features/ui/group/group.tsx';
import { IconButton } from '@/features/ui/icon-button/icon-button.tsx';
import { Stack } from '@/features/ui/stack/stack.tsx';
import { Title } from '@/features/ui/title/title.tsx';

export const LibraryAddRoute = () => {
    const navigate = useNavigate();

    return (
        <Center>
            <Stack w="320px">
                <Group gap="xs">
                    <IconButton
                        icon="arrowLeft"
                        onClick={() => navigate(-1)}
                    />
                    <Title
                        order={1}
                        size="lg"
                    >
                        Add a new library
                    </Title>
                </Group>
                <Suspense fallback={<></>}></Suspense>
            </Stack>
        </Center>
    );
};