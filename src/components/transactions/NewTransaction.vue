<template>
    <div>
        <b-modal id="modal-center" centered item="BootstrapVue" title="Enter Details" hide-footer  v-if="show" scrollable>
            <div>
                <b-form @submit.prevent="onSubmit">
                <b-form-group label="Transaction type" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="form.type" :aria-describedby="ariaDescribedby" name="income" value="income" default>Income</b-form-radio>
                <b-form-radio v-model="form.type" :aria-describedby="ariaDescribedby" name="expense" value="expense">Expense</b-form-radio>
                </b-form-group>

                <b-form-group label="Choose duration" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="form.duration" :aria-describedby="ariaDescribedby" name="daily" value="daily">Daily</b-form-radio>
                <b-form-radio v-model="form.duration" :aria-describedby="ariaDescribedby" name="weekly" value="weekly">Weekly</b-form-radio>
                <b-form-radio v-model="form.duration" :aria-describedby="ariaDescribedby" name="monthly" value="monthly">Monthly</b-form-radio>
                </b-form-group>
            
                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    v-if="form.duration"
                >
                   <div>
                        <label for="example-datepicker">Choose a start date</label>
                        <b-form-datepicker id="example-datepicker" v-model="form.startdate" class="mb-2" required></b-form-datepicker>
                    </div>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label-for="input-2"
                    v-if="form.duration=='weekly' || form.duration=='monthly'"
                >
                   <div>
                        <label for="example-datepicker">Choose an end date</label>
                        <b-form-datepicker id="example-datepicker" v-model="form.enddate" class="mb-2" disabled></b-form-datepicker>
                    </div>
                </b-form-group>
                
                <b-form-group id="input-group-2" label="Category:" label-for="input-2">
                    <b-form-select
                    id="input-2"
                    v-model="form.category"
                    :options="category"
                    required
                    ></b-form-select>
                </b-form-group>
                
                <b-form-group id="input-group-3" label="Item:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="form.item"
                    placeholder="Enter Item"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Description:" label-for="input-4">
                    <b-form-input
                    id="input-4"
                    v-model="form.description"
                    placeholder="Enter Description"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Amount:" label-for="input-5">
                    <b-form-input
                    id="input-5"
                    type="number"
                    v-model="form.amount"
                    placeholder="Enter Amount"
                    required
                    ></b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-button type="submit" variant="primary">Submit</b-button>
                </div>
                </b-form>
            </div>
        </b-modal>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          startdate: '',
          enddate: '',
          duration: 'daily',
          category: null,
          item: '',
          type: 'income',
          amount: null,
          description: ''
        },
        category: [{ text: 'Select One', value: null }, 'Salary', 'Food & Drinks', 'Shopping', 'Housing', 'Transportation', 'Vehicle', 'Entertainment', 'Award wins'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        const data=this.form;
        this.$emit('update',data);
        this.$bvModal.hide('modal-center');
        // this.reset();
      },
      reset(){
          this.form.startdate= new Date();
          this.form.enddate= '';
          this.form.duration= 'daily';
          this.form.category= null;
          this.form.item= '';
          this.form.type= 'income';
          this.form.amount= null;
          this.form.description= '';
      }
    },
    watch: {
      'form.startdate'(){
        this.form.startdate=new Date(this.form.startdate).toISOString().substring(0, 10);
        if(this.form.duration=='weekly'){
          this.form.enddate=new Date()
          this.form.enddate=new Date(this.form.enddate.setDate(new Date(this.form.startdate).getDate()+7)).toISOString().substring(0, 10);
        }
        else if(this.form.duration=='monthly'){
          this.form.enddate=new Date()
          this.form.enddate=new Date(this.form.enddate.setDate(new Date(this.form.startdate).getDate()+30)).toISOString().substring(0, 10);
        }
        else {
          this.form.enddate=this.form.startdate;
        }
      }
    }
  }
</script>
