<template>
    <div>
        <b-card class="shadow-lg mx-3 my-4 p-0 bg-white rounded text-center" no-body>
            <b-tabs card pills>
            <b-tab title="Income" no-body>
                <div>
                    <duration-tabs :transactions="inflowList"/>
                </div>
            </b-tab>
            <b-tab title="Expenses" no-body lazy>
                <div>
                    <duration-tabs :transactions="outflowList"/>
                </div>
            </b-tab>
            <b-tab title="Total" no-body lazy>
                <div>
                    <duration-tabs :transactions="transactions"/>
                </div>
            </b-tab>
        </b-tabs>
        </b-card>
    </div>
</template>
<script>
import DurationTabs from "./DurationTabs.vue"
export default {
    components: {
        DurationTabs,
    },
    props: {
        transactions: {
            required: true,
            type: Array
        }
    },
    computed: {
        inflowList(){
            return this.transactions.filter(item => item.amount>0);
        },
        outflowList(){
            return this.transactions.filter(item => item.amount<0);
        }
    }
}
</script>