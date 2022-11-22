import {Ref, ref} from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'

class AzureService {
    private msalConfig:Ref<IMsalConfig>
    private accessToken:Ref<string>

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: 'f827c248-ff1f-4892-adf3-63475debad36',
                authority: 'https://login.microsoftonline.com/e4c36323-f55d-4975-8c6d-e0a888432631'
            },
            cache: {
                cacheLocation: 'localStorage'
            }
        })
        this.accessToken= ref('')
    }

    setAccessToken(token:string):Ref<string> {
        this.accessToken.value = token
        return this.accessToken
    }
     getAccessToken():Ref<string> {
        return this.accessToken
    }

    getMsalConfig():Ref<IMsalConfig> {
        return this.msalConfig
    }
}

export default AzureService