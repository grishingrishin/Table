<template>
    <tr class="table__row">
        <td class="table__cell">
            {{ order.id }}
        </td>
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
    </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TableEdit',
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions(['removeOrder', 'selectOrder', 'changeOrder', 'cancelEdit']),
    },
};
</script>
