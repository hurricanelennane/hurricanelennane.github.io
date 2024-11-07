<template>
  <section class="blog-section">
    <div class="container">
      <h1 class="blog-title">Blog</h1>
      <div class="blog-content">
        <p>Coming soon! Stay tuned for my posts on Vue, TypeScript, and more!</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Dropdown with Badge Guide</h2>
    <div class="dropdown">
      <button
        class="dropbtn"
        @click="toggleDropdown"
        @keydown.down.prevent="navigateOptions('down')"
        @keydown.up.prevent="navigateOptions('up')"
        @keydown.enter.prevent="selectFocusedOption"
      >
        Dropdown
        <span class="badge">3</span>
      </button>
      <ul class="dropdown-content" :style="{ display: isDropdownOpen ? 'block' : 'none' }">
        <li
          v-for="(option, index) in options"
          :key="index"
          :class="{ 'focused-option': focusedIndex === index }"
          @click="selectOption(index)"
          @mouseenter="focusedIndex = index"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Guide Injection</h2>
    <div class="iframe-container">
      <iframe
        class="guide-iframe"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'BlogPost',
  setup() {
    const isDropdownOpen = ref(false)
    const options = ref(['Option 1', 'Option 2', 'Option 3'])
    const focusedIndex = ref(-1)

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value
      if (isDropdownOpen.value) focusedIndex.value = 0
    }

    const navigateOptions = (direction: 'up' | 'down') => {
      if (direction === 'down') {
        focusedIndex.value = (focusedIndex.value + 1) % options.value.length
      } else if (direction === 'up') {
        focusedIndex.value = (focusedIndex.value - 1 + options.value.length) % options.value.length
      }
    }

    const selectOption = (index: number) => {
      console.log(`Selected option: ${options.value[index]}`)
      isDropdownOpen.value = false
    }

    const selectFocusedOption = () => {
      if (focusedIndex.value >= 0 && focusedIndex.value < options.value.length) {
        selectOption(focusedIndex.value)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('.dropdown')
      if (dropdown && !dropdown.contains(event.target as Node)) {
        isDropdownOpen.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isDropdownOpen,
      options,
      focusedIndex,
      toggleDropdown,
      navigateOptions,
      selectOption,
      selectFocusedOption
    }
  }
})
</script>

<style scoped>
.blog-section {
  background-color: var(--background-color);
  color: var(--text-color);
}

.blog-title {
  font-size: 2.5rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.blog-content {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.focused-option {
  background-color: #ddd;
}

.dropdown-content li:hover {
  background-color: #ddd;
}

.iframe-container {
  margin-top: 20px;
}

.guide-iframe {
  width: 100%;
  height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }

  .blog-content {
    padding: 20px;
  }

  .blog-content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .blog-section {
    padding: 40px 0;
  }

  .blog-title {
    font-size: 1.75rem;
  }

  .blog-content {
    padding: 15px;
  }

  .blog-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }
}
</style>
