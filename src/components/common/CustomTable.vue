<template>
    <v-table
        height="50vh"
        fixed-header
        class="ml-2"
    >
        <thead>
            <tr>
                <th
                    v-for="text in header"
                    :key="text"
                >
                    <strong>{{ text }}</strong>
                </th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </v-table>
</template>
<script>
export default {
    props: {
        header: {
            type: Array,
            required: true
        }
    }
}
</script>