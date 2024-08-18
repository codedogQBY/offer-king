<script setup></script>

<template>
  <div>
    <div
      :style="{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '32px',
        cursor: 'move',
        zIndex: 9999,
        '-webkit-app-region': 'drag'
      }"
    ></div>
    <router-view />
  </div>
</template>
