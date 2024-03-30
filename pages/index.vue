<script setup>
	import { movies } from "~/data/movies";
	import { ref } from "vue";

	const moviesList = ref(movies);
</script>

<template>
	<div class="flex flex-wrap justify-center items-center">
		<template v-for="movie in moviesList">
			<Card
				:img_src="movie.img_src"
				:movie_name="movie.movie_name"
				:gener="movie.gener"
			/>
		</template>
	</div>
</template>
