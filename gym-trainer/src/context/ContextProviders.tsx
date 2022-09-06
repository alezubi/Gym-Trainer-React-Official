import AppUserProvider from "./AppUserProvider";

export default function ContextProviders({children}:any){
    return <>
        <AppUserProvider>
            {children}
        </AppUserProvider>
    </>
}