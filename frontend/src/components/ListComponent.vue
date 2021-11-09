<template>
  <div class="overflow-auto">
    <div class="row">
      <div class="col-md-12">
        <br />
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th @click='sort("firstName")'>{{ sortBy === 'firstName' ? 'Sorted by ' : '' }}First name</th>
              <th @click='sort("lastName")'>{{ sortBy === 'lastName' ? 'Sorted by  ' : '' }}Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th @click='sort("class")'>{{ sortBy === 'class' ? 'Sorted by  ' : '' }}Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in sortedStudents" :key="student._id">
              <td>{{ student.firstName }}</td>
              <td>{{ student.lastName }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ student.class }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: student._id } }"
                  class="btn btn-success"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteStudent(student._id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sortBy: "firstName",
      sortDesc: false,
      perPage: 3,
      currentPage: 1,
      Students: [],
      sortOrder: 1
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
    sort: function (sortBy) {
      if (this.sortBy === sortBy) {
        this.sortOrder = -this.sortOrder;
      } else {
        this.sortBy = sortBy;
      }
    },
  },
  computed: {
    
    sortedStudents() {
      return [...this.Students]
        .map((i) => ({ ...i, sale_potential: parseFloat(i.sale_potential) }))
        .sort((a, b) => {
          if (a[this.sortBy] >= b[this.sortBy]) {
            return this.sortOrder;
          }
          return -this.sortOrder;
        });
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>