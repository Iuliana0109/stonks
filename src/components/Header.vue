<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">
                    Stock Trader
                </router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                   <router-link to="/portfolio" tag="li">
                       <a>Portfolio</a>
                   </router-link>
                   <router-link to="/stocks" tag="li">
                       <a>Stocks</a>
                   </router-link>
                </ul>
                <strong class="navbar-text navbar-right"> 
                    Fnds: {{ funds | currency }}
                </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" @click="endDay">End Day</a>
                    </li>
                    <li>
            <a href="#" @click="savePortfolioDataAsCSV">Save Portfolio Data</a>
                     </li>
                    <!-- <li @click="dropDownOpen =! dropDownOpen"
                        class="dropdown" 
                        :class="{open: dropDownOpen}"
                    > 
                       
                    </li> -->
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
   // import { saveAs } from 'file-saver';

    export default {
        data() {
            return {
                dropDownOpen: false
            };
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            ...mapGetters([
                'funds',
                'stockPortfolio',
                'stocks'
            ])
        },
        methods: {
            ...mapActions([
                'randomizeStocks',
                'fetchData'
            ]),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.funds,
                    stocks: this.stocks, 
                    stockPortfolio: this.stockPortfolio,
                };  

                axios.put('https://stock-trader-58055.firebaseio.com/data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>