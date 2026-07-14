export namespace Util {
    export const createElement = (name: string, attr: Record<string, string>): HTMLElement => {
        const element = document.createElement(name);
        if (typeof attr !== "undefined") {
            let key: keyof typeof attr;
            for (key in attr) {
                const value = attr[key];
                element.setAttribute(key, value);
            }
        }
        return element;
    }
}