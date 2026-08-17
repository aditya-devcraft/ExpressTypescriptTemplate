import { AsyncLocalStorage } from "async_hooks"

type AsynclocalStorageType = {
    correlationId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsynclocalStorageType>(); // created an instance of async local storage

export const getCorrelationId = () => {
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore?.correlationId || 'unlnown-error-while-creating-correlation-id'; // Default value in case store not created
}