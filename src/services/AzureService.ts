import {Ref, ref} from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'

class AzureService {
    private msalConfig:Ref<IMsalConfig>
    private accessToken:Ref<string>

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: 'xxxxxxx',
                authority: 'xxxxxxx'
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