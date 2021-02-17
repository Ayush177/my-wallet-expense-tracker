<template>
    <div>
        <b-card
          class="shadow-lg mx-3 my-4 p-0 bg-white rounded"
        >
                <b-row  class="text-center">
                    <b-col cols="4" md="4" lg="4">
                        <div><strong>Income</strong></div>
                        <div><strong class="text-success">{{ income }}</strong></div>
                    </b-col>
                    <b-col cols="4" md="4" lg="4">
                        <div><strong>Expense</strong></div>
                        <div><strong class="text-danger">{{ expense*(-1) }}</strong></div>
                    </b-col>
                    <b-col cols="4" md="4" lg="4">
                        <div><strong>Balance</strong></div>
                        <div><strong class="text-warning">{{ income-expense }}</strong></div>
                    </b-col>
                </b-row>
        </b-card>
    </div>
</template>
<script>
export default {
  props: {
      income: {
        required: true
      },
      expense: {
          requires: true
      }
  },
}
</script>