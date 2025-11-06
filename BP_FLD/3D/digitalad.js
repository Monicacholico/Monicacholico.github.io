
class NativeVideoPlayer{
    constructor(props){
        this.timeBasedEvents=[2,6];
        this.quartileBasedEvents=[0,25,50,75,100];
        this.video=null;
        const videoContainer=document.querySelector("#google-native-video-media");
        if(videoContainer&&videoContainer.shadowRoot){
            this.video=videoContainer.shadowRoot.querySelector("video")
        }else{
            console.error("Video container '#google-native-video-media' or its shadowRoot not found.")
        }
        this.init();
        this.addTimedEvents();
        this.addButtonEvents()
    }
    init=()=>{
        this.loadScript("https://static01.nytimes.com/ads/adplatforms/cdn/ET/ad-tracking.js")
        .then(e=>{let i="%%PATTERN:ta_page_view_id%%",t="%%PATTERN:page_view_id%%",d="PID_placeholder";
            window.GAMdata={
                prop:"%%PATTERN:prop%%",
                pos:"%%PATTERN:pos%%",
                exit:"%%CLICK_URL_UNESC%%%%DEST_URL_UNESC%%",
                ctx_id:"%%context_id%%",
                lineitemid:"%eaid!",
                viewport:"%%PATTERN:vp%%",
                orderid:"%ebuy!",
                creativeid:"%ecid!",
                uap:"%%PATTERN:uap%%",
                pv_id:d=""!==i?i:t,
                subject:"dfp-ad-events",
                numberOfSlides:1
            };
            if(typeof ET!=="undefined"){
                ET.init(window.GAMdata)
            }else{
                console.error("ET library is not defined after loading the script.")
            }
        }).catch(e=>{console.error("Failed to load ET script:",e)}
    )};
    addTimedEvents = () => {
        if(!this.video){console.error("Cannot add timed events: Video element not found.");
            return}this.video.addEventListener("timeupdate",videoEvent=>{
                const currentTime=Math.round(videoEvent.target.currentTime);
                const duration=Math.round(this.video.duration);
                if(this.timeBasedEvents.length>0&&this.timeBasedEvents[0]===currentTime){
                    const eventTime=this.timeBasedEvents.shift();
                    console.log("time",eventTime+"-seconds");
                    if(typeof ET!=="undefined"&&ET.track){
                        ET.track({type:"video",location:eventTime+"-seconds"})
                    }
                }
                if(duration>0&&this.quartileBasedEvents.length>0){
                    let percentComplete=Math.round(currentTime/duration*100);
                    if(percentComplete>=this.quartileBasedEvents[0]){
                        const eventQuartile=this.quartileBasedEvents.shift();
                        console.log("quartile",eventQuartile);
                        if(typeof ET!=="undefined"&&ET.track){
                            ET.track({type:"video",location:eventQuartile})
                        }
                    }
                }
            })
    };
}