<template>
    <div class="orders">
        <div class="orders__main">
            <Table />
        </div>
    </div>
</template>

<script>
import Table from '../components/Table.vue';

export default {
    name: 'Orders',
    components: {
        Table,
    },
};
</script>

<style lang="scss">
.orders {
    display: flex;
    min-height: 100vh;
    padding: 1em;
    align-items: center;
    justify-content: center;
}
</style>
