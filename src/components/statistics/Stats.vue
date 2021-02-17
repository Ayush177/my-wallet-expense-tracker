<template>
    <div>
        <b-card
         title="Statistics"
         class="shadow-lg mx-3 bg-white rounded text-center"
        >
            <b-row>
            <b-col><pie-chart :chartData="chartData1" :data="chartData1" /></b-col>
            <b-col><pie-chart :chartData="chartData2" :data="chartData2"  v-if="transactions.length"/></b-col>
            </b-row>
        </b-card>
    </div>
</template>
<script>
import PieChart from './PieChart.js'
export default {
    components: {
        PieChart
    },
    props: {
        income: {
            required: true
        },
        expense: {
            required: true
        },
        transactions: {
            required: true
        }
    },
    data(){
        return {
            chartData1: {},
            salary: 0, 
            foodDrinks: 0,
            shopping: 0,
            housing: 0,
            transportation: 0,
            vehicle: 0,
            entertainment: 0,
            awardWins: 0,
            chartData2: {}       
        }
    },
    created(){
        this.load();
    },
    watch: {
        transactions(){
            this.load();
        }
    },
    methods: {
        load(){
            this.chartData1= {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Income", "Expense"],
                datasets: [
                    {
                        label: "Balance Data",
                        backgroundColor: ["#41B883", "#E46651"],
                        data: [parseInt(this.income), parseInt(this.expense)]
                    }
                ]
            }
            this.chartData2={
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Salary", "Food & Drinks", "Shopping", "Housing", "Transportation", "Vehicle", "Entertainments", "Award Wins"],
                datasets: [
                    {
                        label: "Balance Data",
                        backgroundColor: ["#800080", "#000080","#008080", "#00FF00","#FF0000", "#808080","#FFFF00", "#008000"],
                        data: []
                    }
                ]    
            }
            for(const transact of this.transactions){
                if(transact.category=='Salary')
                    this.salary=parseInt(this.salary)+parseInt(transact.amount);
                if(transact.category=='Food & Drinks')
                    this.foodDrinks=parseInt(this.foodDrinks)+parseInt(transact.amount);
                if(transact.category=='Shopping')
                    this.shopping=parseInt(this.shopping)+parseInt(transact.amount);
                if(transact.category=='Housing')
                    this.housing=parseInt(this.housing)+parseInt(transact.amount);
                if(transact.category=='Transportation')
                    this.transportation=parseInt(this.transportation)+parseInt(transact.amount);
                if(transact.category=='Vehicle')
                    this.vehicle=parseInt(this.vehicle)+parseInt(transact.amount);
                if(transact.category=='Entertainment')
                    this.entertainment=parseInt(this.entertainment)+parseInt(transact.amount);
                if(transact.category=='Award Wins')
                    this.awardWins=parseInt(this.awardWins)+parseInt(transact.amount);
            }
            this.chartData2.datasets[0].data.push(this.salary);
            this.chartData2.datasets[0].data.push(this.foodDrinks);
            this.chartData2.datasets[0].data.push(this.shopping);
            this.chartData2.datasets[0].data.push(this.housing);
            this.chartData2.datasets[0].data.push(this.transportation);
            this.chartData2.datasets[0].data.push(this.vehicle);
            this.chartData2.datasets[0].data.push(this.entertainment);
            this.chartData2.datasets[0].data.push(this.awardWins);
        }
    }
}
</script>