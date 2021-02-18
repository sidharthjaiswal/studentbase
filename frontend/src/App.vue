<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">Student-DataBase</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/create"
              >Add Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/view"
              >View Students</router-link
            >
          </li>
        </ul>
        <p style="color: white">
          A MEVN Stack project devloped by Sidharth Jaiswal.
        </p>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>

    <div class="fluid-container">
      <footer class="footer footer-dark bg-primary justify-content-between flex-nowrap flex-row" ><p class="text-center" style="color: white">Copyright © 2021 Sidharth Jaiswal, All rights reserved.</p></footer>
    </div>
  </div>
</template>

<style >
div.fluid-container {
  position: relative;
  bottom: -600px;
}
</style>
