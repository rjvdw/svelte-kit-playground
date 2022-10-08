<script lang="ts">
  import "../styles/app.sass"
  import SideMenu from './layout/SideMenu.svelte'
</script>

<div class="page-grid" data-sveltekit-prefetch>
  <header class="page-header">
    <slot name="header">HHADM</slot>
  </header>

  <aside class="page-side-menu">
    <slot name="side-menu">
      <SideMenu>
        <svelte:fragment slot="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about-me">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
        </svelte:fragment>
      </SideMenu>
    </slot>
  </aside>

  <main class="page-contents">
    <slot></slot>
  </main>
</div>

<style lang="sass">
  @use "../styles/theme"

  .page-grid
    display: grid
    grid-template-areas: "page-header page-header" "page-contents page-side-menu"
    grid-template-rows: max-content auto
    grid-template-columns: auto max-content
    min-height: 100%

  .page-header
    grid-area: page-header
    background: theme.$theme-color
    color: #fff
    padding: 1rem

  .page-side-menu
    grid-area: page-side-menu
    display: flex
    flex-direction: column
    gap: 1rem
    padding: 1rem

  .page-contents
    grid-area: page-contents
    padding: 1rem
</style>
