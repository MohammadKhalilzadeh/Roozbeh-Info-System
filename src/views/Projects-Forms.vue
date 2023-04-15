<template>
  <div class="projects">
    <h1 class="subheading grey--text">Forms</h1>
    <v-container>
      <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              outlined
              color="green"
              @click="sortBy('title')"
              class="mr-2"
              dark
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By form title</span>
            </v-btn>
          </template>
          <span>sort Forms</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              outlined
              color="green"
              @click="sortBy('title')"
              class="mr-2"
              dark
              v-on="on"
            >
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>sort People</span>
        </v-tooltip>
      </v-layout>
      <v-card
        flat
        v-for="project in projects"
        :key="project.title"
        class="mb-1"
      >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs-6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects-Forms",
  data: () => ({
    projects: [
      {
        title: "Form-01",
        person: "Director",
        expires: "1405-06-30",
        status: "Training",
      },
      {
        title: "Form-02",
        person: "Lawer",
        expires: "1405-06-30",
        status: "Training",
      },
      {
        title: "Form-03",
        person: "Instructor",
        expires: "1405-06-30",
        status: "Training",
      },
      {
        title: "Form-04",
        person: "Doctor",
        expires: "1405-06-30",
        status: "Training",
      },
    ],
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid lightblue;
}

.project.no {
  border-left: 4px solid orange;
}
.project.up {
  border-left: 4px solid red;
}
.project.yes {
  border-left: 4px solid yellow;
}
</style>
