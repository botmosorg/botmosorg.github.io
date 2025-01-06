import { MANIFEST } from "./manifest";

export function t(key: string): string {
    if (Object.hasOwn(MANIFEST.dialogs, key)) {
        return MANIFEST.dialogs[key]
    }

    return `TODO: ${key} needs localization!`
}