/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

// eslint-disable-next-line react-hooks/rules-of-hooks

export const PushTo = (href) => {
    const router = useRouter()

    setTimeout(() => {
        router.push(href)
    }, 400);
}

export default PushTo
