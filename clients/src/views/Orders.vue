<template>
    <div class="orders">
        <div class="orders__main">
            <TableWithOrders />
        </div>
    </div>
</template>

<script>
import TableWithOrders from '../components/TableWithOrders.vue';

export default {
    name: 'Orders',
    components: {
        TableWithOrders,
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

    &__main {
        min-height: 480px;
    }
}
</style>
