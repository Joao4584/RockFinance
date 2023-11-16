// * Modules * //

import { message } from "antd";



// * Exports * //


// * Components * //

interface NotifyProps {
    func: "loading" | "success" | "error" | "warning";
    content: string;
    time?: number;
    key?: string;
}
export default function messageNotify({ func, content, time = 2, key }: NotifyProps): void {
    switch (func) {
        case "loading":
            message.loading({ content: content, key: key, duration: time, className: "absolute right-14" });

            break;
        case "success":
            message.success({ content: content, key: key, duration: time, className: "absolute right-14" });
            break;
        case "warning":
            message.warning({ content: content, key: key, duration: time, className: "absolute right-14" });
            break;
        case "error":
            message.error({ content: content, key: key, duration: time, className: "absolute right-14" });
            break;

        default:
            break;
    }
}