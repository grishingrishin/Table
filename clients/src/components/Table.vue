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
        <TableBody />
    </table>
</template>

<script>
import { mapActions } from 'vuex';
import TableBody from './TableBody.vue';

export default {
    name: 'Table',
    components: {
        TableBody,
    },
    methods: {
        ...mapActions(['sortBy']),
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
