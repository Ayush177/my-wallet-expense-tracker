<template>
  <div>
    <the-navbar class="mb-base"/>
    <stats style="margin-top: 125px" :income="income" :expense="expense" :transactions="transactions"/>
    <balance :income="income" :expense="expense"/>
    <div class="text-center">
    <b-button v-b-modal.modal-center variant="primary" class="shadow rounded">Add New Transaction</b-button>
    </div>
    <new-transaction @update="update"/>
    <transaction-tabs :transactions="transactions"/>
  </div>
</template>

<script>
import TheNavbar from '../../components/nav/TheNavbar.vue';
import Stats from '../../components/statistics/Stats.vue';
import Balance from '../../components/details/Balance.vue';
import TransactionTabs from '../../components/transactions/TransactionTabs.vue';
import NewTransaction from '../../components/transactions/NewTransaction.vue';

export default {
  name: "App",
  components: {
    TheNavbar,
    Stats,
    Balance,
    TransactionTabs,
    NewTransaction
  },
  data(){
    return {
      income: 100100,
      expense: 22550,
      transactions:[
            {
                startdate: '2021-01-21',
                enddate: '2021-01-21',
                type: 'income',
                category: "Salary",
                duration: "monthly",
                item: "Salary",
                description: "I got my salary",
                amount: 100000,
            },
            {
                startdate: '2021-02-01',
                enddate: '2021-02-01',
                type: 'expense',
                category: "Shopping",
                duration: "monthly",
                item: "Grocery",
                description: "Grocery Shopping",
                amount: -20000,
            },
            {
                startdate: '2021-01-21',
                enddate: '2021-01-21',
                type: 'expense',
                category: "Food & Drinks",
                duration: "daily",
                item: "Pizza",
                description: "I love Pizzas",
                amount: -1550,
            },
            {
                startdate: '2021-01-21',
                enddate: '2021-01-21',
                type: 'expense',
                category: "Entertainment",
                duration: "weekly",
                item: "Movie",
                description: "Let's watch some movies",
                amount: -2000,
            },
            {
                startdate: '2021-01-21',
                enddate: '2021-01-21',
                type: 'income',
                category: "Award Wins",
                duration: "daily",
                item: "Hackathon Win",
                description: "I won a Hackathon",
                amount: 1000,
            },
        ],
    }
  },
  methods: {
    update(data){
        if(data.type=='expense'){
          this.expense=parseInt(this.expense)+parseInt(data.amount);
          data.amount*=-1;
        }
        else
          this.income=parseInt(this.income)+parseInt(data.amount);
        this.transactions.push(data);
    }
  },
  mounted() {
    if (localStorage.income) {
      this.income = localStorage.income;
    }
    if (localStorage.expense) {
      this.expense = localStorage.expense;
    }
    if (localStorage.transactions) {
      this.transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    }
  },
  watch: {
    income(newIncome) {
      localStorage.income = newIncome;
    },
    expense(newExpense) {
      localStorage.expense = newExpense;
    },
    transactions(newTransactions){
      localStorage.setItem("transactions", JSON.stringify(newTransactions));
    }
  }
};
</script>