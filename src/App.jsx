import * as React from 'react';
import {useEffect, useState} from "react";
import {NavBarHandler} from "./Components/NavBarHandler";
import {ClerkProvider, SignedIn} from "@clerk/clerk-react";
import {Route, Routes} from "react-router-dom";
import NewUserHome from "./Pages/Dashboard/NewUserHome";
import {SignedOutPage} from "./Pages/PublicPage/SignedOutPage";
import {AdminAuth} from "./Components/Admin/AdminAuth";

export default function App() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

    if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }


    return (<ClerkProvider publishableKey={clerkPubKey}>
            <Routes>
                <Route
                    path='/'
                    element={<NavBarHandler
                        isMobile={isMobile}
                        userFlow={false}
                        startTab={"home"}
                    />}
                />
                <Route
                    path='/user'
                    element={<>
                        <SignedIn>
                            <NavBarHandler
                                isMobile={isMobile}
                                userFlow={true}
                                startTab={"userHome"}
                            />
                        </SignedIn>
                        <SignedOutPage/>
                    </>

                    }
                />
                <Route
                    path='/newUser'
                    element={<>
                        <SignedIn>
                            <NewUserHome/>
                        </SignedIn>
                        <SignedOutPage/>
                    </>}
                />
                <Route
                    path='/userInfo'
                    element={<>
                        <SignedIn>
                            <NavBarHandler
                                isMobile={isMobile}
                                userFlow={true}
                                startTab={"userInfo"}
                            />
                        </SignedIn>
                        <SignedOutPage/>
                    </>

                    }
                />
                <Route
                    path='/events'
                    element={<NavBarHandler
                        isMobile={isMobile}
                        userFlow={false}
                        startTab={"events"}
                    />}
                />
                <Route
                    path='/admin'
                    element={<>
                        <SignedIn>
                            <AdminAuth/>
                        </SignedIn>
                        <SignedOutPage/>
                    </>}
                />
            </Routes>
        </ClerkProvider>);
}
