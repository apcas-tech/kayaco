<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Button } from "$lib/components/ui/button";
  import { z } from "zod";

  const categorySchema = z.object({
    category: z.string().min(1, 'Category name is required').max(100, 'Category name is too long')
  });

  let category = "";
  let error: string | null = null;

  const handleCategorySubmit = (e: Event) => {
    e.preventDefault();
    const result = categorySchema.safeParse({ category });

    if (!result.success) {
      error = result.error.errors[0].message;
    } else {
      error = null;
      console.log("Category Submitted:", result.data);
      
    }
  };
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button>Add Category</Button>
  </Dialog.Trigger>

  <Dialog.Content class="space-y-4">
    <Dialog.Header>
      <Dialog.Title>Add Category</Dialog.Title>
      <Dialog.Description>Enter the category name below.</Dialog.Description>
    </Dialog.Header>

    <form on:submit|preventDefault={handleCategorySubmit} class="space-y-4">
      <div>
        <Label for="category">Category Name</Label>
        <Input id="category" bind:value={category} required />
      </div>

      {#if error}
        <p class="text-red-500 text-sm">{error}</p>
      {/if}

      <Button type="submit" class="w-full">Create Category</Button>
    </form>
  </Dialog.Content>
</Dialog.Root>
