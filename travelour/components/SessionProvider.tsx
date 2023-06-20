'use client'

import { Session } from 'next-auth';
import { SessionProvider as Provider} from "next-auth/react";

type P = {
    children: React.ReactNode;
    session: Session | null;
}

export function SessionProvider( {children, session}: P ){
    return (
        <Provider>
            {children}
        </Provider>
    );
}