<script setup lang="ts">
import type { PropType } from "vue";

const emit = defineEmits(["openModal", "deleteRow"]);

function openModal(row: any) {
  emit("openModal", row);
}

function deleteRow(id: number) {
  emit("deleteRow", id);
}

defineProps({
  fields: { type: Array as PropType<String[]>, required: true },
  rows: { type: Array as any },
});
</script>

<template>
  <div class="relative overflow-x-auto mt-5">
    <table class="w-full border-x-2 border-gray-50 text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase text-center bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3" v-for="field in fields">{{ field }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b text-center" v-for="row in rows">
          <th scope="row" class="px-6 py-4 border-2 font-medium text-gray-900 whitespace-nowrap">
            {{ row.name }}
          </th>
          <th scope="row" class="px-6 py-4 border-2 font-medium text-gray-900 whitespace-nowrap">
            {{ row.address }}
          </th>
          <td class="px-6 py-4 border-2">
            <Icon
              @click="openModal(row)"
              class="text-green-600 cursor-pointer hover:text-green-300 duration-200"
              name="material-symbols:edit"
              size="32"
            />
          </td>
          <td class="px-6 py-4 border-2">
            <Icon
              @click="deleteRow(row.id)"
              class="text-red-600 cursor-pointer hover:text-red-300 duration-200"
              name="material-symbols:playlist-remove-rounded"
              size="32"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
