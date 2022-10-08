<script lang="ts">
  import type { ActionData } from './$types'
  import { enhance } from '$app/forms'
  import InputGrid from '$lib/components/form/InputGrid.svelte'
  import Message from '$lib/components/Message.svelte'

  export let form: ActionData
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<form method="post" use:enhance>
  <InputGrid>
    <label for="name">Name:</label>
    <input id="name" type="text" name="name">

    <label for="message">Message:</label>
    <textarea id="message" name="message" cols="30" rows="10"></textarea>

    <div class="controls">
      <button>Submit</button>
    </div>
  </InputGrid>
</form>

{#if form?.errors}
  <Message variant="error">
    <p>There were some errors:</p>
    <ul>
      {#each form?.errors as error}
        <li>{error.field} - {error.error}</li>
      {/each}
    </ul>
  </Message>
{/if}

{#if form?.success}
  <Message variant="success">
    <p>Your message was sent successfully!</p>
  </Message>
{/if}
