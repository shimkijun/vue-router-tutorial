<template>
  <v-app>
    <div>
      <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
      >
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>Vue-tutorial-router</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
            <v-list-group
                v-for="(item, i) in menu"
                :key="i"
                v-model="item.active"
                :prepend-icon="item.icon"
                no-action
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </template>
                <v-list-item
                v-for="subItem in item.subItems"
                :key="subItem.title"
                :to="subItem.to"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      menu: [
        {
          title: 'Home',
          icon: 'mdi-home',
          subItems: [
            {
              title: 'Dashboard',
              to: '/'
            },
            {
              title: 'About',
              to: '/about'
            }
          ]
        },
        {
          title: 'Account',
          icon: 'mdi-account',
          active: true,
          subItems: [
            {
              title: 'Dashboard',
              to: '/'
            }
          ]
        }
      ]
    }
  }
}
</script>
