<template>
    <tr class="table__row">
        <td class="table__cell">
            {{ getOrders.length + 1 }}
        </td>
        <td class="table__cell">
            <input type="text" name="name" class="table__input" placeholder="Name" v-model="order.name" />
        </td>
        <td class="table__cell">
            <input type="text" name="email" class="table__input" placeholder="Email" v-model="order.email" />
        </td>
        <td class="table__cell">
            <input type="text" name="phone" class="table__input" placeholder="Phone" v-model="order.phone" />
        </td>
        <td class="table__cell">
            <div class="table__actions">
                <div class="table__action">
                    <button type="button" class="table__btn" aria-label="Edit order" @click="createOrder">
                        <i class="fas fa-check"></i>
                    </button>
                </div>
                <div class="table__action">
                    <button type="button" class="table__btn" aria-label="Delete order" @click="destroyOrder">
                        <i class="far fa-times"></i>
                    </button>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TableCreate',
    data() {
        return {
            order: {
                name: '',
                email: '',
                phone: '',
            },
        };
    },
    computed: {
        ...mapGetters(['getOrders']),
    },
    methods: {
        ...mapActions(['addOrder', 'switchRowCreater']),
        createOrder() {
            const { order } = this;

            for (const k in order) {
                if (!order[k].length) {
                    return;
                }
            }

            this.addOrder(order);
            this.destroyOrder();
        },
        destroyOrder() {
            const { order } = this;
            for (const k in order) order[k] = '';
            this.switchRowCreater();
            this.order = order;
        },
    },
};
</script>
