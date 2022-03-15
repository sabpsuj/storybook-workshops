<template>
  <section class="o-events">
    <div
      v-for="el in data.dates"
      :key="el.date"
      class="o-events__date"
    >
      <base-title level="1">
        {{ el.date }}
      </base-title>
      <ul class="o-events__list">
        <li
          v-for="event in el.events"
          :key="event.name"
          class="o-events__item"
        >
          <event-item
            :name="event.name"
            :description="event.description"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/events.json'
import EventItem from '@/components/molecules/EventItem.vue'
import BaseTitle from '@/components/atoms/BaseTitle.vue'
</script>

<style lang="scss" scoped>
.o-events {
  &__date {
    margin-bottom: 3rem;
    @media (min-width: 900px) {
      display: flex;
    }
  }

  &__list {
  list-style-type: none;
  padding-left: 0;
    @media (min-width: 900px) {
      padding-left: 1.5rem;
      margin: 0 0 0 1.5rem; 
      border-left: 4px solid var(--c-accent);
    }
  }

  &__item {
    &:not(:last-of-type) {
      margin-bottom: 2.5rem;
    }
  }
}
</style>