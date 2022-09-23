<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { requests } from '@/stores';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const name = ref('');
const description = ref('');
const date = ref(new Date());

onMounted(async () => {
    if (requests.value) return;

    const res = await fetch('http://localhost:3000/requests');
    requests.value = await res.json();
});

async function deleteRequest(index: number) {
    await fetch(`http://localhost:3000/requests/${requests.value[index]._id}`, {
        method: 'DELETE',
    });

    requests.value.splice(index, 1);
}

async function createRequest() {
    let hasErr = false;

    if (!name.value) {
        err('name');
        hasErr = true;
    }
    if (!description.value) {
        err('description');
        hasErr = true;
    }
    if (!date.value) {
        err('date');
        hasErr = true;
    }

    if (hasErr) return;

    const res = await fetch(`http://localhost:3000/requests`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.value,
            description: description.value,
            date: date.value.toString(),
        }),
    });
    const json = await res.json();

    requests.value.push(json);

    name.value = '';
    description.value = '';
}

function err(id: string) {
    const input = document.getElementById(id);
    input?.classList.add('p-invalid');
}
</script>

<template>
    <form>
        <h3>Создание новой заявки</h3>
        <label for="name" ref="nameLabel">Название</label><br />
        <InputText type="text" id="name" v-model="name" /><br />

        <label for="description">Описание</label><br />
        <InputText type="text" id="description" v-model="description" /><br />

        <label for="date">Дата</label><br />
        <Calendar inputId="basic" id="date" v-model="date" autocomplete="off" />

        <br /><br />

        <Button @click="createRequest" class="p-button-raised">Создать</Button>
    </form>

    <h3>Список заявок</h3>
    <DataTable :value="requests">
        <template #empty>Список пуст</template>
        <Column field="name" header="Название"></Column>
        <Column field="description" header="Описание"></Column>
        <Column header="Дата">
            <template #body="{ data }">
                {{ new Date(data.date).toLocaleDateString() }}
            </template>
        </Column>
        <Column header="Действия">
            <template #body="{ index }">
                <Button
                    @click="deleteRequest(index)"
                    class="p-button-warning"
                    icon="pi pi-pencil"
                />
                <Button
                    @click="deleteRequest(index)"
                    class="p-button-danger"
                    icon="pi pi-trash"
                />
            </template>
        </Column>
    </DataTable>
</template>

<style scoped>
Button {
    margin-left: 2px;
    margin-right: 2px;
}

input {
    margin-bottom: 10px;
}

table {
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid;
}

th,
td {
    padding: 4px;
}
</style>
