<template>
    <tr class="table__row">
        <td class="table__cell">
            {{ order.id }}
        </td>
        <td class="table__cell">
            <input type="text" class="table__input" name="name" v-model="edit.name" placeholder="Enter name" />
        </td>
        <td class="table__cell">
            <input type="text" class="table__input" name="email" v-model="edit.email" placeholder="Enter email" />
        </td>
        <td class="table__cell">
            <input type="text" class="table__input" name="phone" v-model="edit.phone" placeholder="Enter phone" />
        </td>
        <td class="table__cell">
            <div class="table__actions">
                <div class="table__action">
                    <button type="button" class="table__btn" aria-label="Edit order" @click="changeOrder(edit)">
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
    name: 'RowWithEditOrder',
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            edit: {
                ...this.order,
            },
        };
    },
    methods: {
        ...mapActions(['changeOrder', 'cancelEdit']),
    },
};
</script>
