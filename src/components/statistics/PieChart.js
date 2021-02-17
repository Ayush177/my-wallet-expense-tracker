import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["options"],
  mounted() {
    this.renderPieChart();
  },
  methods: {
    // this.chartData1 is created in the mixin.
    // If you want to pass options please create a local options object
    renderPieChart() {
      this.renderChart(this.chartData, this.options);
    }
  },
  watch: {
    'options': {
      handler() {
        this._chart.destroy()
        this.renderChart(this.chartData, this.options)
      },
      deep: true
    }
  }
};
