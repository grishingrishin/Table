<template>
    <tbody class="table__body">
        <TableCreate v-if="getCreateState" />
        <!-- End create table row -->

        <template v-for="(order, index) of getOrders">
            <TableEdit :order="order" :key="index" v-if="order.id == getEditOrderID" />
            <TableRow :order="order" :key="index" v-else />
        </template>
    </tbody>
</template>

<script>
import { mapGetters } from 'vuex';
import TableRow from './TableRow.vue';
import TableEdit from './TableEdit.vue';
import TableCreate from './TableCreate.vue';

export default {
    name: 'TableBody',
    components: {
        TableCreate,
        TableEdit,
        TableRow,
    },
    computed: {
        ...mapGetters(['getOrders', 'getEditOrderID', 'getCreateState']),
    },
};
</script>

<style lang="scss">
.table {
    &__body {
        vertical-align: top;
    }

    &__row:not(:last-child) td {
        border-bottom: 1px solid #000;
    }

    &__cell {
        width: 182px;
        height: 72px;
        vertical-align: middle;
    }

    &__cell:first-child {
        width: 82px;
        text-align: center;
    }

    &__cell:last-child {
        width: 120px;
        text-align: center;
    }

    &__input {
        width: 100%;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        opacity: 0.2;
        outline: none;
        border: none;
    }

    &__input:focus {
        opacity: 0.5;
    }

    &__actions {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__action {
        margin-right: 0.8em;
    }

    &__btn {
        font-size: 18px;
    }
}
</style>
