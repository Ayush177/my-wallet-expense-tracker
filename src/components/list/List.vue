<template>
    <div>
        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
            <b-tr>
                <b-th>{{ end ? 'Start Date' : 'Date'}}</b-th>
                <b-th v-if="end">End Date</b-th>
                <b-th>Category</b-th>
                <b-th>Item</b-th>
                <b-th>Description</b-th>
                <b-th>Amount</b-th>
            </b-tr>
            </b-thead>
            <b-tbody>
            <b-tr v-for="(transaction,indx) in transactions" :key="indx">
                <b-td>{{ transaction.startdate }}</b-td>
                <b-td v-if="end">{{ transaction.enddate }}</b-td>
                <b-td>{{ transaction.category }}</b-td>
                <b-td>{{ transaction.item }}</b-td>
                <b-td>{{ transaction.description }}</b-td>
                <b-td :class="transaction.amount>0 ? 'text-success' : 'text-danger'"><strong>{{ transaction.amount }}</strong></b-td>
            </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>
<script>
export default {
    props: {
        transactions: {
            required: true
        },
        end: {
            required: true
        }
    }
}
</script>