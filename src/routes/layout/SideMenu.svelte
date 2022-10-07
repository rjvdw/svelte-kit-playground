<nav class="side-menu-item">
  <h2>Navigation</h2>
  <ul>
    <slot name="nav"></slot>
  </ul>
</nav>

<slot></slot>

<style lang="sass">
  :global(.side-menu-item)
    background: #6662
    border: thin solid #666
    padding: 1rem

    & > :global(h2)
      font-size: 1.25rem
      margin: 0
        bottom: .5rem

  ul:last-child,
  ul :global(li:last-child)
    margin-bottom: 0
</style>
