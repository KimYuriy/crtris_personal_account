<template>
    <v-row>
        <v-col
          sm="9"
          class="d-flex flex-column"
        >
          <v-text
            class="d-flex justify-center"
          >
            СВОДКА
          </v-text>
          <shown-task-table 
            class="ml-2"
            :tasks="tasks"
          />
        </v-col>

        <v-col
          class="d-flex justify-center flex-column"
          sm="3"
        >
          <v-img
            src="@/assets/person.jpg"
          >
          </v-img>
          <v-text
            class="d-flex justify-center"
          >
            {{ firstName }} {{ secondName }}, группа {{ group }}
          </v-text>
          <v-container>
            <v-text
              class="d-flex justify-center"
            >
              Рейтинг: {{ rating }}
            </v-text>
          </v-container>
        </v-col>

      </v-row>
</template>

<script>
import ShownTaskTable from '@/components/InternPage/ShownTasks/ShownTasksTable.vue';

export default {
    components: {
      ShownTaskTable
    },
    data() {
      return {
        // ВСЕ ДАННЫЕ БУДУТ ПОЛУЧЕНЫ С СЕРВЕРА, ТУТ ОНИ ПРЕДСТАВЛЕНЫ ИСКЛЮИТЕЛЬНО В ЦЕЛЯХ ОТЛАДКИ
        firstName: "Имя",
        secondName: "Фамилия",
        group: "000",
        rating: 8,
        tasks: [
          {
            id: 1,
            name: "HEX-редактор",
            type: {
              type: "Task",
              name: "Пр. задание"
            },
            status: "WIP",
            beginDate: "25.12.2023",
            endDate: "",
            expired: false
          },
          {
            id: 2,
            name: "Java - базовый курс",
            type: {
              type: "Course",
              name: "Уч. курс"
            },
            status: "WIP",
            beginDate: "25.12.2023",
            endDate: "",
            expired: false
          }
        ]
      }
    }
}
</script>