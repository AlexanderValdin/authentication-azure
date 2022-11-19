<template>
    <h1>Azure Login</h1>
</template>
<script lang="ts">
    import { PublicClientApplication} from '@azure/msal-browser'
    import { defineComponent, onMounted } from 'vue'
    import AzureService from '@/services/AzureService'
    export default defineComponent({
        name: 'AzureView',
        
        setup() {
            onMounted(() => {
                const azureService = new AzureService()
                $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
            })
            let account = ''

            const login = async () => {
                await $msalInstance
                .loginPopup({})
                .then( () => {
                    const myAccounts = $msalInstance.getAllAccounts()
                    account = myAccounts[0]
                    $emitter.emit('login', account)
                })
                .catch( error => {
                    alert(error)
                })
            }

            return {
                account, login
            }
        }
    })
</script>