<template>
    <table class="table">
        <thead class="table__head">
            <tr class="table__row">
                <td class="table__cell">
                    <div class="table__name">
                        id
                    </div>
                </td>
                <td class="table__cell">
                    <div class="table__field">
                        <div class="table__name">
                            Name
                        </div>
                        <button type="button" class="table__sort" aria-label="Sort by name" @click="sortBy('name')">
                            <i class="fas fa-sort"></i>
                        </button>
                    </div>
                </td>
                <td class="table__cell">
                    <div class="table__field">
                        <div class="table__name">
                            Email
                        </div>
                        <button type="button" class="table__sort" aria-label="Sort by email" @click="sortBy('email')">
                            <i class="fas fa-sort"></i>
                        </button>
                    </div>
                </td>
                <td class="table__cell">
                    <div class="table__field">
                        <div class="table__name">
                            Phone
                        </div>
                    </div>
                </td>
                <!-- Cell for edit buttons -->
                <td class="table__cell"></td>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr class="table__row" v-for="(order, index) of getOrders" :key="index">
                <td class="table__cell" v-for="(value, index) in order" :key="index">
                    {{ value }}
                </td>
                <td class="table__cell">
                    <div class="table__actions">
                        <div class="table__action">
                            <button type="button" class="table__btn" aria-label="Edit order">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                        <div class="table__action">
                            <button
                                type="button"
                                class="table__btn"
                                aria-label="Delete order"
                                @click="removedOrder(order.id)"
                            >
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Table',
    computed: {
        ...mapGetters(['getOrders']),
    },
    methods: {
        ...mapActions(['removedOrder', 'sortBy']),
    },
};
</script>

<style lang="scss">
.table {
    min-height: 480px;
    margin-top: -20%;
    border-collapse: collapse;

    &__field {
        display: flex;
    }

    &__sort {
        margin-left: 0.5em;
    }

    &__body {
        vertical-align: top;

        & > tr:not(:last-child) > td {
            border-bottom: 1px solid #000;
        }
    }

    &__cell {
        min-width: 182px;
        line-height: 64px;
    }

    &__cell:first-child {
        min-width: 82px;
        text-align: center;
    }

    &__cell:last-child {
        min-width: 120px;
        text-align: center;
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
