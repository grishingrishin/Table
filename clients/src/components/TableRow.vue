<template>
    <tr class="table__row">
        <td class="table__cell">
            {{ order.id }}
        </td>
        <template v-for="(field, index) in order">
            <td class="table__cell" :key="index" v-if="field !== order.id">
                {{ field }}
            </td>
        </template>
        <td class="table__cell">
            <div class="table__actions">
                <div class="table__action">
                    <button type="button" class="table__btn" aria-label="Edit order" @click="selectOrder(order.id)">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
                <div class="table__action">
                    <button type="button" class="table__btn" aria-label="Delete order" @click="removeOrder(order.id)">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TableRow',
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
