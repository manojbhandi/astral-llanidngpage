
import Script from "next/script"
const CookieConsentBanner = () => {
    return (
        <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="b240e001-198f-47d0-b437-21506f5c9f97"
            data-blockingmode="auto"
            type="text/javascript"
        >

        </Script>
    )
}
export default CookieConsentBanner