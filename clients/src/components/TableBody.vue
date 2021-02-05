<template>
    <tbody class="table__body">
        <template v-for="order of getOrders">
            <tr class="table__row" :key="order.id">
                <td class="table__cell">
                    {{ order.id }}
                </td>
                <template v-if="order.id !== getEditOrderID">
                    <template v-for="(field, index) in order">
                        <td class="table__cell" :key="index" v-if="field !== order.id">
                            {{ field }}
                        </td>
                    </template>
                    <td class="table__cell">
                        <div class="table__actions">
                            <div class="table__action">
                                <button
                                    type="button"
                                    class="table__btn"
                                    aria-label="Edit order"
                                    @click="selectOrder(order.id)"
                                >
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                            <div class="table__action">
                                <button
                                    type="button"
                                    class="table__btn"
                                    aria-label="Delete order"
                                    @click="removeOrder(order.id)"
                                >
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                </template>
                <template v-else>
                    <template v-for="(value, key, index) in order">
                        <td class="table__cell" :key="index" v-if="value !== order.id">
                            <input type="text" class="table__input" :name="key" :value="value" :placeholder="key" />
                        </td>
                    </template>
                    <td class="table__cell">
                        <div class="table__actions">
                            <div class="table__action">
                                <button
                                    type="button"
                                    class="table__btn"
                                    aria-label="Edit order"
                                    @click="changeOrder(order, editOrderID)"
                                >
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                            <div class="table__action">
                                <button type="button" class="table__btn" aria-label="Delete order" @click="cancelEdit">
                                    <i class="far fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                </template>
            </tr>
        </template>
    </tbody>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'TableBody',
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['getOrders', 'getEditOrderID']),
    },
    methods: {
        ...mapActions(['removeOrder', 'selectOrder', 'changeOrder', 'cancelEdit']),
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
