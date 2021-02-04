<template>
    <table class="table">
        <thead class="table__head">
            <tr class="table__row">
                <td class="table__cell">
                    id
                </td>
                <td class="table__cell">
                    Name
                </td>
                <td class="table__cell">
                    Email
                </td>
                <td class="table__cell">
                    Phone
                </td>
                <!-- Cell for edit buttons -->
                <td class="table__cell"></td>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr class="table__row" v-for="(order, index) of orders" :key="index">
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
                            <button type="button" class="table__btn" aria-label="Delete order">
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
export default {
    name: 'Table',
    data() {
        return {
            orders: [
                {
                    id: 1,
                    name: 'Ivan Ivanov',
                    email: 'test@test.com',
                    phone: '+79996666969',
                },
                {
                    id: 2,
                    name: 'Ivan Ivanov',
                    email: 'test@test.com',
                    phone: '+79996666969',
                },
                {
                    id: 3,
                    name: 'Ivan Ivanov',
                    email: 'test@test.com',
                    phone: '+79996666969',
                },
                {
                    id: 4,
                    name: 'Ivan Ivanov',
                    email: 'test@test.com',
                    phone: '+79996666969',
                },
                {
                    id: 5,
                    name: 'Ivan Ivanov',
                    email: 'test@test.com',
                    phone: '+79996666969',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.table {
    margin-top: -20%;
    border-collapse: collapse;

    &__body > tr:not(:last-child) > td {
        border-bottom: 1px solid #000;
    }

    &__cell {
        min-width: 182px;
        line-height: 64px;

        &:first-child {
            min-width: 82px;
            text-align: center;
        }

        &:last-child {
            min-width: 120px;
            text-align: center;
        }
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
