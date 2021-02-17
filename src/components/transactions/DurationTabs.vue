<template>
    <div>
        <b-card class="shadow-lg p-0 bg-white rounded text-center" no-body>
            <b-tabs card>
            <b-tab title="Daily" no-body>
                <div class="pt-2">
                    <list :transactions="dailyList" :end="false"/>
                </div>
            </b-tab>
            <b-tab title="Weekly" no-body lazy>
                <div class="pt-2">
                    <list :transactions="weeklyList" :end="true"/>
                </div>
            </b-tab>
            <b-tab title="Monthly" no-body lazy>
                <div class="pt-2">
                    <list :transactions="monthlyList" :end="true"/>
                </div>
            </b-tab>
        </b-tabs>
        </b-card>
    </div>
</template>
<script>
import List from "../list/List.vue"
export default {
    components: {
        List,
    },
    props: {
        transactions: {
            required: true,
        }
    },
    computed: {
        dailyList(){
            return this.transactions.filter(item => item.duration=='daily');
        },
        weeklyList(){
            return this.transactions.filter(item => item.duration=='weekly');
        },
        monthlyList(){
            return this.transactions.filter(item => item.duration=='monthly');
        }
    }
}
</script>