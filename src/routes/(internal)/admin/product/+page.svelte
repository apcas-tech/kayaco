<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Button } from "$lib/components/ui/button";

  let name = "";
  let email = "";

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log({ name, email });
 
  };
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Form</Button>
  </Dialog.Trigger>

  <Dialog.Content class="space-y-4">
    <Dialog.Header>
      <Dialog.Title>Submit Your Info</Dialog.Title>
      <Dialog.Description>Please enter your name and email below.</Dialog.Description>
    </Dialog.Header>

    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div>
        <Label for="name">Name</Label>
        <Input id="name" bind:value={name} placeholder="Enter your name" required />
      </div>

      <div>
        <Label for="email">Email</Label>
        <Input id="email" type="email" bind:value={email} placeholder="Enter your email" required />
      </div>

      <Button type="submit" class="w-full">Submit</Button>
    </form>
  </Dialog.Content>
</Dialog.Root>
