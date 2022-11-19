<template>
    <h1>Azure Login</h1>
</template>
<script lang="ts">
    import { PublicClientApplication} from '@azure/msal-browser'
    import { defineComponent, DefineComponent } from 'vue'
    import AzureService from '@/services/AzureService'
    export default defineComponent({
        name: 'AzureView',
        data(){
            return {
                account: ''
            }
        },
        async created() {
            const azureService = new AzureService()
            this.$msalInstance = new PublicClientApplication(azureService.getMsalConfig())
        },
        methods: {
            async login() {
                await this.$msalInstance
                .loginPopup({})
                .then( () => {
                    const myAccounts = this.$msalInstance.getAllAccounts()
                    this.account = myAccounts[0]
                    this.$emitter.emit('login', this.account)
                })
                .catch( error => {
                    alert(error)
                })
            }
        }
    })
</script>