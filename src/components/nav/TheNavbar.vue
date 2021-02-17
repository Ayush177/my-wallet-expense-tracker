<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary" sticky class="position-fixed w-100 mb-5">
    <b-navbar-brand href="/" class="navbar-brand">
      <b-row>
        <b-col>
            <img :src="logo_url" alt="IPL logo" class="bg-white block">
        </b-col>
        <b-col class="pt-4">
            <h2>My Wallet</h2>
        </b-col>
      </b-row>
    </b-navbar-brand>
  </b-navbar>
</div>

</template>

<script>
export default {
  data(){
    return{
      logo_url: 'https://c.keka.com/static/images/features/payroll/Expense_Management_Software.svg',
    }
  },
}
</script>

<style scoped>
img {
  width: 75px;
}
</style>