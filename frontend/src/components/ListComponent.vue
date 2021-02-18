<template>
  <div class="overflow-auto">
    <b-table
      :fields="fields"
      :items="Students"
      :per-page="perPage"
      :current-page="currentPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      responsive="sm"
      medium
      striped
    >
     <!-- <template #cell(actions)="row">
        <b-button 
          size="md"
            @click.prevent="deleteStudent(Students._id)"
          class="bg-danger"
        >
          Delete
        </b-button>

        <b-button size="md" @click="row.toggleDetails" class="bg-success">
          <router-link :to="{ name: 'edit', params: { id: Students._id } }"
            >Edit
          </router-link>
        </b-button>
      </template>-->
    </b-table>
    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
    </div>
    <br />
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sortBy: "firstname",
      sortDesc: false,
      fields: [
        {
          key: "firstName",
          sortable: true,
        },
        {
          key: "lastName",
          sortable: true,
        },
        {
          key: "email",
          sortable: false,
        },
        {
          key: "phone",
          sortable: false,
        },
        {
          key: "class",
          sortable: true,
        },
       /* {
          key: "actions",
          sortable: false,
          visible: false
        },*/
      ],
      perPage: 3,
      currentPage: 1,
      Students: [],
    };
  },

  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  computed: {
    rows() {
      return this.Students.length;
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>