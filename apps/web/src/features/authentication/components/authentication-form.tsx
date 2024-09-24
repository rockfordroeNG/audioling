import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate } from 'react-router';
import { CONSTANTS } from '@/constants.ts';
import { AuthenticateServer } from '@/features/authentication/components/authenticate-server.tsx';
import { ValidateServer } from '@/features/authentication/components/validate-server';
import { useAuthUser } from '@/store/auth-store.ts';

enum AuthenticationStep {
    VALIDATE_SERVER = 0,
    AUTHENTICATE = 1,
}

export type AuthenticationFormValues = {
    password: string;
    username: string;
};

const steps = [AuthenticationStep.VALIDATE_SERVER, AuthenticationStep.AUTHENTICATE];

export const AuthenticationForm = () => {
    const isAuthorized = useAuthUser();
    const [serverUrl, setServerUrl] = useState(CONSTANTS.BASE_URL);
    const [step, setStep] = useState(steps[0]);

    const goToNextStep = () => {
        setStep(steps[1]);
    };

    const goToPreviousStep = () => {
        setServerUrl('');
        setStep(steps[0]);
    };

    if (isAuthorized) {
        return <Navigate to="/app" />;
    }

    return (
        <AnimatePresence mode="sync">
            {step === steps[0] && (
                <ValidateServer
                    value={serverUrl}
                    onChange={setServerUrl}
                    onSubmit={goToNextStep}
                />
            )}
            {step === steps[1] && (
                <AuthenticateServer
                    serverUrl={serverUrl}
                    onBack={goToPreviousStep}
                />
            )}
        </AnimatePresence>
    );
};
