export declare class Utilities {
    static deepClone<T>(item: T): T;
    static deepFreeze<T>(item: any): T;
    static deepCloneAndFreeze<T>(item: T): T;
    /**
     * Keeps compatibility with apps compiled and stored in the database
     * with previous Apps-Engine versions
     */
    static transformFallbackModuleForCustomRequire(moduleName: string): string;
    static transformModuleForCustomRequire(moduleName: string): string;
    static allowedInternalModuleRequire(moduleName: string): boolean;
    static buildCustomRequire(files: {
        [s: string]: string;
    }, currentPath?: string): (mod: string) => {};
}
