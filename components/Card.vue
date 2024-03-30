<script setup>
	const props = defineProps({
		img_src: String,
		movie_name: String,
		gener: String,
	});
</script>

<template>
	<div
		class="w-[250px] h-[300px] border-2 border-green-300 rounded-[20px] p-[2px] m-2 flex flex-col items-center justify-around"
	>
		<img
			:src="props.img_src"
			alt=""
			class="w-[200px] h-[200px] contain rounded-[20px]"
		/>
		<div class="text-center">
			<p class="font-bold">{{ props.movie_name }}</p>
			<p>{{ props.gener }}</p>
		</div>
	</div>
</template>
