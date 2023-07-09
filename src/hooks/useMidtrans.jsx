import { useEffect } from "react";

const useMidtrans = ({snapUrl, clientKey}) => {
    useEffect(() => {
        const snapUrl = process.env.REACT_SNAP_URL;
        const clientKey = process.env.REACT_SNAP_CLIENT_KEY;

        const script = document.createElement('script');
        script.src = snapUrl;
        script.setAttribute('data-client-key', clientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])
}

export default useMidtrans;