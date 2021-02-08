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
                <td class="table__cell">
                    <div class="table__actions" v-if="!getCreateState">
                        <div class="table__action">
                            <button type="button" class="table__btn" aria-label="Edit order" @click="switchRowCreater">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </thead>
        <RowsWithOrders />
    </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RowsWithOrders from './RowsWithOrders.vue';

export default {
    name: 'TableWithOrders',
    components: {
        RowsWithOrders,
    },
    computed: {
        ...mapGetters(['getOrders', 'getCreateState']),
    },
    methods: {
        ...mapActions(['sortBy', 'switchRowCreater']),
    },
};
</script>

<style lang="scss">
.table {
    border-collapse: collapse;

    &__field {
        display: flex;
    }

    &__sort {
        margin-left: 0.5em;
    }
}
</style>
