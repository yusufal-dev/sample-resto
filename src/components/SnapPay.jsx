import { useEffect} from "react";

export default function SnapPay({snapToken}){


    useEffect(() => {

		const snapUrl = process.env.REACT_APP_SNAP_URL;
        const clientKey = process.env.REACT_APP_SNAP_CLIENT_KEY;

        const script = document.createElement('script');
        script.src = snapUrl;
        script.setAttribute('data-client-key', clientKey);
        script.async = true;

        document.body.appendChild(script);

		if(snapToken && window.snap){
			window.snap.embed(snapToken,{
				embedId: "snap-container"
			})
		}
		
		
	}, [snapToken]);
	

    return(
        
        <div id="snap-container"></div>
    


    );
}